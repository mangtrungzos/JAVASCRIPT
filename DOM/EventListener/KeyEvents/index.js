// eventListener = Listen for specific events to create interactions web pages
//                 events: keydown, keyup
//                 .addEventListener(event, callback);

const myBox = document.getElementById("myBox");
const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", (event) => {
    myBox.textContent = "😗";
    myBox.style.backgroundColor = "tomato";
});

document.addEventListener("keyup", (event) => {
    myBox.textContent = "😑";
    myBox.style.backgroundColor = "lightblue";
});

document.addEventListener("keydown", (event) => {
    event.preventDefault();

    if (event.key.startsWith("Arrow")) {
        switch (event.key) {
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }
        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
});
