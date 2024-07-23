// variable scope = where a variable is recognized and accessible 
//                  Local vs Global


// declare variables in the global scope so that they can be accessed anywhere in the program

let petName = 'Rocky' // Global variable
myFunction()

function myFunction() {
    fruit = 'apple'; // Considered global
    console.log(typeof petName + '- ' + 'My pet name is ' + petName)
}

console.log(typeof petName + '- ' + 'My pet name is ' + petName + 'Fruit name is ' + fruit)

// declare variables in the local scope and try to access them at different scopes

myfunction();
anotherFunc();
let petNames;
function myfunction() {
    let petNames = "Sizzer"; // local variable
    console.log(petNames);
}
function anotherFunc() {
    let petNames = "Tom"; // local variable
    console.log(petNames);
}
console.log(petNames);
