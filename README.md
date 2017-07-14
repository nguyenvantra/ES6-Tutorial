# ES6-Tutorial
ES6 là phiên bản mới nhất của bộ tiêu chuẩn ECMAScript. ES6 ra mắt giữa 2015 với rất nhiều những tính năng sau

## let, const
**Let** cho phép chúng ta khai báo biến trong phạm vi các khối lệnh **(Block Scoped)**. Các khối lệnh **(Block Scoped)** được định nghĩa bởi cặp ngoặc nhọn **{}**.

```javascript
if(true){
  let x = 10;
  console.log(x); // in ra 10;
}
console.log(x); //Uncaught ReferenceError: x is not defined
```
**Const** là **hằng số**, có nghĩa là biến được khai báo bởi từ khoá **const** thì **không thể thay đổi giá trị**.

```javascript
{
  const name = 'Nguye Van Tra';
  name = 'darkness'; // Uncaught TypeError: Assignment to constant variable.

  console.log(name); // Nguyen Van Tra
}
```
**const** cũng giới hạn phạm vi trong các khối lệnh **(Block Scoped)** giống như **let**
```javascript
{
  const name = 'Nguye Van Tra';
}

{
  console.log(name); // undefined
}
```
