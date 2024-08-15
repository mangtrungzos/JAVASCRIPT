// ODM = DOCUMENT OBJECT MODEL
//       Object{} that represents the page you see in the web browser
//       Provides you with an API to interact with it
//       Web browser constructs the DOM when it loads an HTML document,
//       Structures all the elements in a tree-like representation.
//       JS can access the DOM to dynamically
//       change the content, structure, and style of a web page

// element selectors = Methods used to target and manipulate HTMl elements
//                     They allow you to select one or multiple HTML elements
//                     from the DOM

// 1. document.getElementById()         // ELEMENT OR NULL
// 2. document.getElementsByClassName() // HTML COLLECTION
// 3. document.getElementsByTagName()   // HTML COLLECTION
// 4. document.querySelector()          // FIRST ELEMENT OR NULL
// 5. document.querySelectorAll()       // NODELIST

// const myHeading = document.getElementById('my-heading');
// myHeading.style.backgroundColor = "yellow";
// myHeading.style.textAlign = "center";

// // getElementsByClassName()
// const fruits = document.getElementsByClassName("fruits");

// // Use array method with HTML collection
// Array.from(fruits).forEach(fruit => {
//     fruit.style.backgroundColor = "yellow";
// });

// getElementByTagName()
const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

for (let h4Element of h4Elements) {
  h4Element.style.backgroundColor = "red";
}

for (let liElement of liElements) {
  liElement.style.backgroundColor = "green";
}

// Array.from(h4Elements).forEach(h4Element => {
//     h4Element.style.backgroundColor = "red";
// });

// Array.from(liElements).forEach(liElement => {
//     liElement.style.backgroundColor = "lightgreen";
// });

// querySelector()
const element = document.querySelector(".fruits");

element.style.backgroundColor = "purple";

// querySelectorAll()
const foods = document.querySelectorAll("li");

foods.forEach((food) => {
  food.style.backgroundColor = "lightgreen";
});
