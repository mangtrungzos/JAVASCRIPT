// class = (ES6 feature) provides a more structured and cleaner way to
//         work with objects compared to traditional constructor func
//         ex. static keyword, encapsulation, inheritance
// Tạo ra các đối tượng (objects) và kế thừa các tính năng của chúng

class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  
    displayProduct() {
      console.log(`Product: ${this.name}`);
      console.log(`Price: $${this.price}`);
    }
  
    calculateTotal(saleTax) {
      return this.price + this.price * saleTax;
    }
  }
  
  const saleTax = 0.05;
  const product1 = new Product("Laptop", 1000);
  product1.displayProduct();
  
  const total = product1.calculateTotal(saleTax);
  console.log(`Total price (with tax): $${total.toFixed(2)}`);
  