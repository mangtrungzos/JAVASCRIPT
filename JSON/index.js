// JSON = (JS Object Notation: ký tự) data-interchange format
//        Used for exchanging data between a server and a web application
//        JSON files { key: value } OR { value1, value2, value3 }

//        JSON.stringify() = converts a JS object to a JSON string
//        JSON.parse() = converts a JSON string to a JS object

//        JSON.stringify() = converts a JS object to a JSON string
const names = ["Vu", "Trong", "Sang"];
const person = {
  name: "Vu",
  age: "22",
  isEmployed: true,
  hobbies: ["Sports", "Cooking", "Travelling"],
};
const people = [
  {
    name: "Vu",
    age: "22",
    isEmployed: true,
  },
  {
    name: "Sang",
    age: "23",
    isEmployed: false,
  },
  {
    name: "Trong",
    age: "24",
    isEmployed: true,
  },
  {
    name: "Johan",
    age: "25",
    isEmployed: false,
  },
];

const jsonString = JSON.stringify(people);

console.log(jsonString);

//        JSON.parse() = converts a JSON string to a JS object
const jsonNames = `["Vu", "Trong", "Sang"]`;
const jsonPerson = `{
  name: "Vu",
  age: "22",
  isEmployed: true,
  hobbies: ["Sports", "Cooking", "Travelling"],
}`;

const parseData = JSON.parse(jsonNames);

console.log(parseData);

// Fetching Data
fetch("people.json")
  // response.json() return a promise
  .then((response) => response.json())
  .then((values) => values.forEach((value) => console.log(value.name)));
