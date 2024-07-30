// for each = method used to iterate over the elements
//            of an array and apply a specified function (callback)
//            to each element

//            array.forEach(callback)

// ex. 1
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(double);
// console.log(numbers); // [2, 4, 6, 8, 10]

numbers.forEach(display);

function double(element, index, arr) {
  arr[index] = element * 2;
}

function display(element) {
  console.log(element);
}


// ex. 2
let fruits = ["apple", "orange", "banana"];

fruits.forEach(display)
function show(element) {
  console.log(element);
}