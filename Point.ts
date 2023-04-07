export class Point2D {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  getX() {
    return this.x;
  }
  setX(input: number) {
    this.x = input;
  }
  getY() {
    return this.y;
  }
  setY(input: number) {
    this.y = input;
  }
  getXY() {
    return { x: this.x, y: this.y };
  }
  setXY(item1: number, item2: number) {
    this.x = item1;
    this.y = item2;
  }
}

export class Point3D extends Point2D {
  z: number;
  constructor(z: number, x: number, y: number) {
    super(x, y);
    this.z = z;
  }

  getZ() {
    return this.z;
  }
  setZ(input: number) {
    this.z = input;
  }
  getXYZ() {
    return { x: this.x, y: this.y, z: this.z };
  }
  setXYZ(item: number, item1: number, item2: number) {
    this.x = item;
    this.y = item1;
    this.z = item2;
  }
}

// let p2d = new Point2D(1, 12);
// console.log(p2d.getXY());
// p2d.setXY(22, 33);
// console.log(p2d.getXY());
// p2d.setX(99);
// console.log(p2d.getXY());
// p2d.setY(108);
// console.log(p2d.getXY());

let p3d = new Point3D(1, 2, 3);
console.log(p3d.getXYZ());
p3d.setXYZ(33, 44, 11);
console.log(p3d.getXYZ());
p3d.setX(123);
p3d.setZ(0);
console.log(p3d.getXYZ());
console.log(p3d.getX());
