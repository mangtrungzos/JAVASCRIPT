// How to accept user input

// 1. window prompt
// 2. HTMl Textbox

let username;

document.getElementById('mySubmit').onclick = () => {
    username = document.getElementById('myText').value;
    document.getElementById('myH1').textContent = `Hello ${username}`;
    console.log(username);
}