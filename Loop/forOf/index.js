const map = new Map([
    ["name", "Akash"],
    ["age", 25],
    ["city", "Noida"]
]);

for (let [key, value] of map) {
    console.log(`${key}: ${value}`);
}

// Iterating Over an Object’s Properties using for…of Loop
// While the for…of loop is not directly used to iterate over object properties. 
// You can use it in combination with Object.keys(), Object.values(), or Object.entries() to achieve this.

let person = {
    name: "Akash",
    age: 25,
    city: "Noida"
};

for (let key of Object.keys(person)) {
    console.log(`${key}: ${person[key]}`);
}

