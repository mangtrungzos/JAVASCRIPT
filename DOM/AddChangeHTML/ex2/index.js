// --------- EXAMPLE 2 <LI> ---------

// 1. CREATE THE ELEMENT
const newListItem = document.createElement("li");

// 2. ADD ATTRIBUTES / PROPERTIES
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

// 3. APPEND ELEMENT TO DOM
// document.body.append(newListItem)
// document.body.prepend(newListItem)
document.getElementById("fruits").append(newListItem);
// document.getElementById("fruits").prepend(newListItem)

const orange = document.getElementById("orange");
document.getElementById("fruits").insertBefore(newListItem, orange);

// If li tag don't have id
// const listItem = document.querySelectorAll("#fruits li")
// document.getElementById("fruits").insertBefore(newListItem, listItem[1])

// REMOVE HTML ELEMENT
// document.body.removeChild(newLink)
// document.getElementById("fruits").removeChild(newListItem)
