// sort() = method used to sort elements of an array in place
//          Sorts elements as string in lexicographic order, not alphabetical
//          lexicographic = (alphabet + numbers + symbols) as strings

let fruits = ["apple", "orange", "banana", "grapes"];

fruits.sort();
console.log(fruits);


// Hàm so sánh
// Nếu a - b nhỏ hơn 0, a sẽ được sắp xếp trước b.
// Nếu a - b lớn hơn 0, a sẽ được sắp xếp sau b.
// Nếu a - b bằng 0, thứ tự của a và b không thay đổi.

let numbers = [1, 10, 2, 3, 4, 5, 6, 7, 8];

numbers.sort((a, b) => a - b);
console.log(numbers);

// So sánh 1 và 10. Kết quả là 1 - 10 = -9 (nhỏ hơn 0), vì vậy 1 đứng trước 10.
// So sánh 10 và 2. Kết quả là 10 - 2 = 8 (lớn hơn 0), vì vậy 2 đứng trước 10.
// So sánh 10 và 3. Kết quả là 10 - 3 = 7 (lớn hơn 0), vì vậy 3 đứng trước 10.

const people = [{name: "Sang", age: 22, gpa: 3.0},
                {name: "Leng", age: 23, gpa: 3.5},
                {name: "Loung", age: 21, gpa: 3.1},
];

people.sort((a, b) => a.age - b.age);
console.log(people);