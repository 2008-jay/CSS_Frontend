// Select ELement using QuerySelector :

const header = document.querySelector(".header");
console.log(header);
console.dir(header);


const navItem = document.querySelector(".nav");
console.log(navItem);

// SO in case we want all the nav-items we can use querySelectorAll 
const navItems = document.querySelectorAll(".nav-items");
console.log(navItems);

// returns all the nav-items in form of Nodelist 

/* !important 

 -  The querySelector() method returns the first element that matches a CSS selector.
 -  To return all matches (not only the first), use the querySelectorAll() instead.
 -  Both querySelector() and querySelectorAll() throw a SYNTAX_ERR exception if the selector(s) is invalid.

 - The querySelectorAll() method returns all elements that matches a CSS selector(s).
 - The querySelectorAll() method returns a NodeList.
 - The querySelectorAll() method throws a SYNTAX_ERR exception if the selector(s) is invalid


*/

