// object = A collection(tập hợp) of related(liên quan) properties and/or methods
//          Can represent(đại diện) a real world object (people, products, places)
//          object = { key: value, function() }

const person = {
    firstName: "Vu",
    lastName: "Sang",
    age: 22,
    isEmployed: true,
    sayHello: () => console.log("Hi! I'm Sang"),
    eat: () => console.log("I'm eating a king crab"),
  };
  
  person.sayHello();
  person.eat();
  
  const person1 = {
    firstName: "Nolan",
    lastName: "Johan",
    age: 22,
    isEmployed: false,
    sayHello: () => console.log("Hi! I'm Johan"),
    eat: () => console.log("I'm eating a noodles soup"),
  };
  
  console.log(person.firstName);
  console.log(person.lastName);
  console.log(person.age);
  console.log(person.isEmployed);
  
  console.log(person1.firstName);
  console.log(person1.lastName);
  console.log(person1.age);
  console.log(person1.isEmployed);
  