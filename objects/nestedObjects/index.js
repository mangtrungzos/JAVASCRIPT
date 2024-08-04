// nested objects = Objects inside  of other objects.
//                  Allows you to represent more complex date structures
//                  Child Object is enclosed by a Parent Object

//                  Person{Address{}. ContactInfo{}}
//                  ShoppingCart{KeyBoard{}, Mouse{}, Monitor{}}


const person = {
    fullName: " VU TRONG SANG",
    age: 22,
    isStudent: true,
    hobbies: ["music", "games", "sports"],
    address: {
        street: "District 2. Tran Nao",
        city: "HCM city",
        country: "Viet Nam"
    }
}

// console.log(person.fullName);
// console.log(person.address.street);

for (const property in person.address){
    console.log(person.address[property]);
}

