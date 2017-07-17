# ES6-Tutorial

ES6 là phiên bản mới nhất của bộ tiêu chuẩn ECMAScript. ES6 ra mắt giữa 2015 với rất nhiều những tính năng sau

## let, const

**let** cho phép chúng ta khai báo biến trong phạm vi các khối lệnh **(Block Scoped)**. Các khối lệnh **(Block Scoped)** được định nghĩa bởi cặp ngoặc nhọn **{}**.

```javascript
if(true){
  let x = 10;
  console.log(x); // in ra 10;
}
console.log(x); //Uncaught ReferenceError: x is not defined
```

**const** là **hằng số**, có nghĩa là biến được khai báo bởi từ khoá **const** thì **không thể thay đổi giá trị**.

Example:

```javascript
{
  const name = 'Nguye Van Tra';
  name = 'darkness'; // Uncaught TypeError: Assignment to constant variable.

  console.log(name); // Nguyen Van Tra
}
```

**const** cũng giới hạn phạm vi trong các khối lệnh **(Block Scoped)** giống như **let**

Example:

```javascript
{
  const name = 'Nguye Van Tra';
}

{
  console.log(name); // undefined
}
```

## Arrow Function

Sử dụng **=>** để khai báo function trong javascript. Cách khai báo này tương đối giống **Lambda Expression** trong **Java8**, giúp cho code tường minh và ngắn gọn hơn.

Example:

```javascript
var showName = (name) => {
  console.log(name);
};

showName('Nguyen Van Tra'); // Nguyen Van Tra
```

Khắc phục tình trạng **this bị bind nhầm** như trước.

Example:

```javascript
// Error
var student = {
  id : "13130317",
  name : "Nguyen Van Tra",
  showData : function (callFunc){
    callFunc();
  },
  render : function(){
    this.showData(function(){ // this này thuộc đối tượng student nên ok
      console.log(this.id); // id không tồn tại vì this là đối tượng window
      console.log(this.name); // name không tồn tại vì this là đối tượng window
    });
  }
};
student.render();
```

Cách khắc phục lỗi trong es5

```javascript
// Su dung ham bind() es5
var student = {
  id : "13130317",
  name : "Nguyen Van Tra",
  showData : function (callFunc){
    callFunc();
  },
  render : function (){
    this.showData(function(){
      console.log(this.id);
      console.log(this.name);
    }.bind(this));
  }
};
student.render();
```

Cách khắc phục lỗi trong ES6

```javascript
// Su dung Arrow Function es6
var student = {
  id : "13130317",
  name : "Nguyen Van Tra",
  showData : function (callFunc){
    callFunc();
  },
  render : function (){
    this.showData(()=>{
      console.log(this.id);
      console.log(this.name);
    });
  }
};
student.render();
```

## Default Parameters

Là giá trị mặc định của tham số khi truyền vào các function. Nó giống cách khai báo trong **Ruby**, trong **java** thì vẫn **chưa có** nhé.

Example:
Default Parameters trong es5
```javascript
function showName(name) {
  name = name || "Nguyen Van Tra";
  return name;
}

console.log(showName()); // Nguyen Van Tra
```
Default Parameters trong es6
```javascript
function showName(name = "Nguyen Van Tra") {
  return name;
}
console.log(showName()); // Nguyen Van Tra
```

## Rest Parameters
Có thể khai báo một hàm với số lượng tham số không xác định. Để khai báo **Rest Parameter** thì sử dụng dấu ```...``` trước biến đại diện.

Example:
```javascript
var data = (id, name, ...other) => {
  console.log(id); // 13130317
  console.log(name); // Nguyen Van Tra
  console.log(other); // ["Nha Giau", "Dep Trai"]
}
data("13130317", "Nguyen Van Tra", "Nha Giau", "Dep Trai");
```

## Class
ES5 không hổ trợ class như các ngôn ngữ lập trình hướng đối tượng khác, nhưng mô phỏng **class** thông qua các **function và prototype**. Trong ES6 đã hổ trợ **class**, **constructor**, **get/set**.

Example:
```javascript
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
```

ES6 hỗ trợ **kế thừa** bằng từ khoá **extends**
```javascript
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
```
