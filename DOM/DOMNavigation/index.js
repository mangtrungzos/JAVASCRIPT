// DOM Navigation = The process of navigating through the structure
//                  of an HTML document using JS

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// --------- .firstElementChild ------------

const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "red";

const ulElements = document.querySelectorAll("ul");
ulElements.forEach((ulElement) => {
  const firstChild = ulElement.firstElementChild;
  firstChild.style.backgroundColor = "yellow";
});

// --------- .lastElementChild ------------

const element1 = document.getElementById("fruits");
const lastChild = element1.lastElementChild;
lastChild.style.backgroundColor = "lightgreen";

const ulElement1 = document.querySelectorAll("ul");
ulElement1.forEach((ulElement) => {
  const lastChild = ulElement.lastElementChild;
  lastChild.style.backgroundColor = "lightgreen";
});

// --------- .nextElementSibling ------------

const element2 = document.getElementById("onions");
const nextSibling = element2.nextElementSibling;
nextSibling.style.backgroundColor = "purple";

// -------- .children --------

const element3 = document.getElementById("desserts");
const children = element3.children;

Array.from(children).forEach((child) => {
  child.style.backgroundColor = "pink";
});
