// append = Add elements or text strings to the end of the parent element's content
// prepend = Add elements or text strings to the beginning of the parent element's content

// Example <h1>
// 1. Create the Element
const newH1 = document.createElement("h1");

// 2. Add Attributes / Properties
newH1.textContent = "I like pizza!";
newH1.id = "myh1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// 3. Append Element to DOM
document.body.append(newH1);
// document.body.prepend(newH1);
document.getElementById("box1").append(newH1);
// document.getElementById("box1").prepend(newH1);

// const box1 = document.getElementById("box3");
// document.body.insertBefore(newH1, box1);

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[1]);

// Remove HTML Element
document.getElementById("box1").removeChild(newH1);
