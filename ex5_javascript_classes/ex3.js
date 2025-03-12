"use strict";

class Shape{
    #perimeter;
    #type;

    constructor(type, perimeter){
        this.#type = type;
        this.#perimeter = perimeter;
    }

    get perimeter(){
        return this.#perimeter;
    }

    get type(){
        return this.#type;
    }

}

class Triangle extends Shape{
    constructor(a, b, c){
        super("Triangle", a+b+c);
        this.a = a;
        this.b = b;
        this.c = c;
    }
}

class Square extends Shape {
    constructor(side){
        super("Square", side*4)
        this.side = side;
    }
}

const t = new Triangle(1, 2, 3);       
console.log(t.type); // Triangle
console.log(t.perimeter); // 6
const q = new Square(2);       
console.log(q.type); // Square
console.log(q.perimeter); // 8
Q.perimeter = 9; // Error
