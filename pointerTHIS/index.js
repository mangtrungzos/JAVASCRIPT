// this = reference to the object where THIS is used
//        (the object depends on the immediate context))
//        person.name = this.name

const person = {
    name: "Sang",
    favFood: "Blood",
    sayHello: function () {
      console.log(`Hi! I'm ${this.name}`);
    },
  };
  
  person.sayHello();
  