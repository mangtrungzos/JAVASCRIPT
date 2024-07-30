// callback = a function that is passed as an argument to another function

//            used to handle asynchronous operations:
//            1. Reading a file
//            2. Network requests
//            3. Interacting with a database

//            "Hey, when you're done, call this next"

// ex. 1
hello(leave);

function hello(callback) {
    console.log("Hello!");
    callback();
}

function leave() {
    console.log("Leave!");
}

function goodbye() {
    console.log("Goodbye!");
}

// ex. 2
sum(displayConsole, 1, 2);

function sum(callback, x, y) {
  let res = x + y;
  callback(res);
}

function displayConsole(res) {
  console.log(res);
}
