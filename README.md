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
Sử dụng **=>** để khai báo function trong javascript. Cách khai báo này tương đối giống
**Lambda Expression** trong **Java8**, giúp cho code tường minh và ngắn gọn hơn.

Example:
```javascript
var showName = (name) => {
  console.log(name);
};

showName('Nguyen Van Tra'); // Nguyen Van Tra
```
