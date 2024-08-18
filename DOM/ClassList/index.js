// ClassList = Element property in JS used to interact
//             with an element's list of classes (css classes)
//             Allows you to make reusable classes for many elements
//             Across your webpage

// add()
// remove()
// toggle(remove if present, add if not)
// replace(oldClass, newClass)
// contains()

const myButton = document.getElementById("myButton");

myButton.classListList.add("enabled");

myButton.addEventListener("click", (event) => {
  event.target.classList.replace("enabled", "disabled");
});
