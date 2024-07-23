// While loop = repeat some code WHILE some condition is true

let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);

    if (username === 'admin' && password === 'admin'){
        loggedIn = true;
        console.log("You are logged in");
    } else {
        console.log("You are not logged in");
    }
}