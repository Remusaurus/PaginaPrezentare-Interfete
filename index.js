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
});

