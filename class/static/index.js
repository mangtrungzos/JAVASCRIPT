// static = keyword that defined properties or methods that belong
//          to a class isSelf rather than the object created
//          from that class (class owns anything static, not the object)
// Note: Có thể gọi một phương thức tĩnh mà không cần tạo một đối tượng của lớp đó.

class MathUtil {
    static PI = 3.14159;
  
    static getDiameter(radius) {
      return radius * 2;
    }
  
    static getcircumference(radius) {
      return 2 * this.PI * radius;
    }
  
    static getArea(radius) {
      return this.PI * radius * radius;
    }
  }
  
  console.log(MathUtil.PI);
  console.log(MathUtil.getDiameter(10));
  console.log(MathUtil.getcircumference(10));
  console.log(MathUtil.getArea(10));
  
  // ex. 2
  class User {
    static userCount = 0;
  
    constructor(username) {
      this.username = username;
      User.userCount++;
    }
  
    static getUserCount() {
      console.log(`There are ${User.userCount} users online`);
    }
  
    sayHello() {
      console.log(`Hello, my username is ${this.username}`);
    }
  }
  
  const user1 = new User("Johan");
  console.log(user1.username);
  console.log(user1.userCount); // return undefined
  // user doesn't have userCount as a property, it's static
  // that means it belongs to the class not any objects created from the class
  // to access userCount we have to type the name of class
  user1.sayHello();
  // console.log(User.userCount); // return 1;
  User.getUserCount();
  