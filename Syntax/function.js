// Function definition
function func() {

    // Declare a variable
    let num = 45;

    // Display the result
    console.log(num);
}

// Function call
func();

function add(x, y) {
    let result = x+ y;
    return result;
}

let answer = add(2,3)
console.log(answer);

// Arrow function
const makePerson = (firstName, lastName) =>
    ({
        first: firstName, 
        last: lastName
    });
console.log(makePerson("Pankaj", "Bind"));


// can be async by prefixing the expression with the async keyword.
async param => expression
async (param1, param2, ...paramN) => {
  statements
}