export class Circle {
  radius: number;
  color: string;
  filled: boolean;
  constructor(rad: number, col: string, fill: boolean) {
    this.radius = rad;
    this.color = col;
    this.filled = fill;
  }

  getRad() {
    return this.radius;
  }

  setRad(input: number) {
    this.radius = input;
  }

  getColor() {
    return this.color;
  }

  setColor(input: string) {
    this.color = input;
  }

  isFill() {
    if (this.filled) {
      return `Filled`;
    } else {
      return `Not filled`;
    }
  }

  setFill(input: boolean) {
    this.filled = input;
  }

  area() {
    return this.radius ** 2 * Math.PI;
  }

  perimeter() {
    return this.radius * 2 * Math.PI;
  }

  getInfo() {
    return `This circle with color ${this.color} and radius of ${
      this.radius
    } is ${this.isFill()}`;
  }
}

export class Cylinder extends Circle {
  height: number;

  constructor(height: number, rad: number, col: string, fill: boolean) {
    super(rad, col, fill);
    this.height = height;
  }

  getVolume(): number {
    return this.radius ** 2 * this.height * Math.PI;
  }

  area(): number {
    return 2 * this.radius * Math.PI * (this.height + this.radius);
  }

  perimeter(): number {
    return 2 * (2 * this.radius + this.height);
  }

  getInfo(): string {
    return `This Cylinder with height ${this.height}, radius ${
      this.radius
    }, color ${
      this.color
    } and ${this.isFill()} is a sub class of ${super.getInfo()}`;
  }
}

let circle = new Circle(10, "red", false);
console.log(circle.getInfo() + "\n");
let cylinder = new Cylinder(12, 20, "blue", true);
console.log(cylinder.getInfo());
