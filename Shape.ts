export class Shape {
  color: string = "red";
  filled: boolean = true;

  constructor(color: string, filled: boolean) {
    this.color = color;
    this.filled = filled;
  }

  getColor(): string {
    return this.color;
  }

  setColor(input: string) {
    this.color = input;
  }

  isFilled(): string {
    if (this.filled) {
      return `filled`;
    } else {
      return `not filled`;
    }
  }

  setFilled(input: boolean) {
    this.filled = input;
  }

  toString() {
    return `A shape with color of ${this.color} and ${this.isFilled()}`;
  }
}

export class Circle extends Shape {
  radius: number;

  constructor(color: string, filled: boolean, radius: number) {
    super(color, filled);
    this.radius = radius;
  }

  getRadius(): number {
    return this.radius;
  }

  setRadius(input: number) {
    this.radius = input;
  }

  getArea() {
    return this.radius ** 2 * Math.PI;
  }

  getPerimeter() {
    return this.radius * 2 * Math.PI;
  }

  toString() {
    return `A Circle with radius = ${
      this.radius
    }, which is a subclass of ${super.toString()}`;
    // super.toString();
  }
}

export class Rectangle extends Shape {
  width: number;
  length: number;

  constructor(width: number, length: number, color: string, filled: boolean) {
    super(color, filled);
    this.width = width;
    this.length = length;
  }

  getWidth(): number {
    return this.width;
  }

  setWidth(input: number) {
    this.width = input;
  }

  getLength(): number {
    return this.length;
  }

  setLength(input: number) {
    this.length = input;
  }

  getArea() {
    return this.width * this.length;
  }

  getPerimeter() {
    return (this.width + this.length) * 2;
  }

  toString() {
    return `A Rectangle with width = ${this.width} and length = ${
      this.length
    }, which is a subclass of ${super.toString()}`;
  }
}

export class Square extends Rectangle {
  //   side: number;

  constructor(side: number, color: string, filled: boolean) {
    super(side, side, color, filled);
    // this.side = side;
  }

  getSide() {
    return this.getWidth;
  }

  setSide(input: number) {
    this.setLength(input);
    this.setWidth(input);
  }

  setWidth(input: number) {
    this.setSide(input);
  }

  setLength(input: number) {
    this.setSide(input);
  }

  toString() {
    return `A Square with side = ${
      this.width
    }, which is a subclass of ${super.toString()}`;
  }
}

let circle = new Circle("red", false, 10);
console.log(circle.toString() + "\n");

let rect = new Rectangle(10, 12, "green", true);
console.log(rect.toString() + "\n");

let sqr = new Square(10, "purple", true);
console.log(sqr.toString() + "\n");
