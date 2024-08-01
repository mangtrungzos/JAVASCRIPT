// constructor = special method for defining the properties and methods of an object
// Được sử dụng khi muốn tạo ra các đối tượng (objects) với những thuộc tính và phương thức riêng biệt.

function Car(make, model, year, color) {
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function() { console.log(`You drive the ${this.model}`) }
   }
   
   const car1 = new Car("Honda", "Civic", "2023", "Black");
   const car2 = new Car("Toyota", "Corolla", "2023", "Red");
   
   console.log(car1.make);
   console.log(car1.model);
   console.log(car1.year);
   console.log(car1.color);
   
   car1.drive()