// filter = creates a new array by filtering out elements

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbs = numbers.filter(isEven);
console.log(evenNumbs);

function isEven(number){
    return number % 2 === 0;
}