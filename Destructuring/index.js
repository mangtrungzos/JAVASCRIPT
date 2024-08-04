// destructuring = extract values from arrays and objects
//                 the assign them to variables in convenient way
//                 [] = to perform array destructuring (phan tich)
//                 {} = to perform object destructuring

// ex. 1
// SWAP THE VALUE OF TWO VARIABLES
let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);

// ex. 2
// SWAP 2 ELEMENTS IN AN ARRAY
const colors = ["red", "green", "blue"];

[colors[0], colors[2]] = [colors[2], colors[0]];

console.log(colors);

// ex. 3
// ASSIGN ARRAY ELEMENTS TO VARIABLES
const color = ["black", "white", "purple"];

const [firstColor, secondColor, thirdColor] = color;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);

// ex. 4
// EXTRACT VALUES FROM OBJECTS
const person = {
    firstName: "Sang",
    lastName: "Jong",
    age: 22,
    job: "Software Engineer"
}

const person1 = {
    firstName: "Vu",
    lastName: "Jong",
    age: 21,
}

const {firstName, lastName, age, job} = person;
// const {firstName, lastName, age, job = "Chef"} = person1;


console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);


// ex. 5
// DESTRUCTURE IN FUNCTION PARAMETERS

function displayPerson({firstName, lastName, age, job = "Unemployed"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}


displayPerson(person);