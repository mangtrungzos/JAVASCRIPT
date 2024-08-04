// Object Accessors (Getters and Setters)
// getter = special method that makes a property readable
// setter = special methood that method makes a property writable

// validate and modify(xac thuc & sua doi) a value when reading/writing a property

class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        } else {
            console.log("Width must be a positive number");
        }
    }

    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight;
        } else {
            console.log("Height must be a positive number");
        }
    }

    get width(){
        return `${this._width.toFixed(1)}cm`;
    }

    get height(){
        return `${this._height.toFixed(1)}cm`;
    }

    get area(){
        return `${(this._width * this._height).toFixed(1)}cm^2`;
    }
}

const rectangle = new Rectangle(3, 4);

rectangle.width = 5;
rectangle.height = 6;

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);
