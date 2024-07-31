// arrow function = a concise(Ngắn gọn) way to write a function expressions
//                  good for simple functions that you use only once
//                  (parameters) => some code

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squares = numbers.map((number) => 
  Math.pow(number, 2));

const cubes = numbers.map((number) => 
  Math.pow(number, 3));

const evenNums = numbers.filter((number) =>   
  number % 2 === 0);

const oddNums = numbers.filter((number) => 
  number % 2 !== 0);

const total = numbers.reduce((accumulator, number) => 
  accumulator + number);

console.log(total);