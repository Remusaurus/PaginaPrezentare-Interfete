

let fullName = "Ciuciu Remus";
let firstName;
let lastName;

firstName = fullName.slice(fullName.indexOf(" ")+1);
lastName = fullName.slice(0, fullName.indexOf(" "));

console.log("First Name: " + firstName);
console.log("Last Name: " + lastName);
console.log("Full Name: " + fullName);