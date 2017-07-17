class Shape {
  constructor(color) {
    this.color = color;
  }

  getColor() {
    return "Color: " + this.color;
  }
}

var shape = new Shape("Red");
console.log(shape.getColor()); // Color: Red

class Rectangle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }
}
