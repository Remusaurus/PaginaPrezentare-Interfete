document.addEventListener('DOMContentLoaded', function () {
  const sortSelect = document.getElementById('sort-order');
  const issuesGrid = document.querySelector('.issues-grid');

  sortSelect.addEventListener('change', function () {
    const sortOrder = sortSelect.value;
    const issues = Array.from(issuesGrid.querySelectorAll('.issue'));

    issues.sort(function (a, b) {
      const dateA = new Date(a.getAttribute('data-date'));
      const dateB = new Date(b.getAttribute('data-date'));

      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });
    
    issues.forEach(function (issue) {
      issuesGrid.appendChild(issue);
    });
  });

    // COMIC POPUP
  const modal = document.getElementById('issue-modal');

  if (modal) {
    const closeButton = modal.querySelector('.modal-close');
    const modalCover = modal.querySelector('#modal-cover');
    const modalTitle = modal.querySelector('#modal-title');
    const modalDate = modal.querySelector('#modal-date');
    const modalSummary = modal.querySelector('#modal-summary');
    const modalLink = modal.querySelector('#modal-official-link');

    document.addEventListener('click', function (event) {
      const link = event.target.closest('.issue-cover, .issue-title a');
      if (!link) return;

      const issue = link.closest('.issue');
      if (!issue) return;

      event.preventDefault();

      const image = issue.querySelector('.issue-cover img');
      const title = issue.querySelector('.issue-title a');
      const date = issue.querySelector('.issue-date');

      if (!image || !title || !date) return;

      modalTitle.textContent =
        issue.dataset.title || title.textContent.trim();

      modalDate.textContent = date.textContent.trim();

      modalSummary.textContent =
        issue.dataset.summary || 'More information coming soon.';

      modalCover.src = image.src;
      modalCover.alt = image.alt;

      modalLink.href = issue.dataset.url || title.href;

      modal.showModal();
    });

    if (closeButton) {
      closeButton.addEventListener('click', function () {
        modal.close();
      });
    }

    modal.addEventListener('click', function (event) {
      if (event.target === modal) {
        modal.close();
      }
    });
  }
});
