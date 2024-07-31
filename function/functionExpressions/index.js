// function declaration = define a reusable(tái sử dụng) block of code
//                        that performs a specific task

// func expressions = a way to define functions as values or variables

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map((number) => {
  return Math.pow(number, 2);
});

const evenNums = numbers.filter((number) => {
  return number % 2 === 0;
});

const total = numbers.reduce((acc, number) =>  {
  return acc + number;
});


console.log(squares);

console.log(evenNums);

console.log(total);