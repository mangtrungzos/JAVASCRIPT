class Person{
    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{
    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Vu Sang", 22, "District 2. Tran Nao", "HCM city", "Viet Nam");
const person2 = new Person("Sang Vu", 23, "District 2. Tran Nao", "HCM city", "Viet Nam");


console.log(person1.address.country);