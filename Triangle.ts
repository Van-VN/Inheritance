export class Shape {
  name: string;
  color: string;
  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
  }
  getInfo() {
    return `This Shape named ${this.name} and is ${this.color}`;
  }
}

export class Triangle extends Shape {
  side1: number;
  side2: number;
  side3: number;
  constructor(
    side1: number,
    side2: number,
    side3: number,
    name: string,
    color: string
  ) {
    super(name, color);
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }
  getSide1() {
    return this.side1;
  }
  setSide1(input: number) {
    this.side1 = input;
  }
  getSide2() {
    return this.side2;
  }
  setSide2(input: number) {
    this.side2 = input;
  }
  getSide3() {
    return this.side3;
  }
  setSide3(input: number) {
    this.side3 = input;
  }
  area(): number {
    return Math.sqrt(
      (this.perimeter() / 2) *
        (this.perimeter() / 2 - this.side1) *
        (this.perimeter() / 2 - this.side2) *
        (this.perimeter() / 2 - this.side3)
    );
  }
  perimeter(): number {
    return this.side1 + this.side2 + this.side3;
  }

  getInfo() {
    return `This Triangle named ${this.name} has 3 side ${this.side1}, ${
      this.side2
    }, ${this.side3}, in ${
      this.color
    } color, has a Perimeter of ${this.perimeter()}, area of ${this.area()} and is a sub class of ${super.getInfo()}`;
  }
}

let shape1 = new Shape("Basic Shape", "Red");
let randomTriangle = new Triangle(13, 14, 15, "Basic Triangle", "Teal");
console.log("\n" + randomTriangle.getInfo() + "\n");
