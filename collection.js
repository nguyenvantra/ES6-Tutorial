//Set trong es6
let mySet = new Set(); // khởi tạo

mySet.add(1); // Thêm phần tử cho Set
mySet.add(2); // Thêm phần tử cho Set
mySet.add(3); // Thêm phần tử cho Set
mySet.add(4); // Thêm phần tử cho Set
mySet.add(5); // Thêm phần tử cho Set

mySet.delete(1); // Xoa phần tử trong set

mySet.has(5); // Kiểm tra phần tử tồn tại trong Set

mySet.size(); // Đếm tổng số phần tử

mySet.clear(); // Xoá toàn bộ phần tử

//Duyệt Set sử dụng for of
for (let data of mySet) {
  console.log(data);
}

//Map trong es6
let myMap = new Map(); // khởi tạo

myMap.set("name", "Nguyen Van Tra"); // Thêm phần tử cho map
myMap.set("email", "dkdarknessnvt@gmail.com"); // Thêm phần tử cho map

myMap.delete("name"); // Xoá phần tử có key là name

myMap.has("email"); // Kiểm tra phần tử tồn tại

myMap.size(); // Đếm tổng số phần tử

myMap.clear(); // Xoá toàn bộ data

// Hàm keys() lấy danh sách key
for (var key of myMap.keys()) {
  console.log(key);
}

// Hàm values() lấy danh sách values
for (var value of myMap.values()) {
  console.log(value);
}

// Hàm entries() lấy danh sách key và value
for (var entry of myMap.entries()) {
  console.log(entry);
}

// Duyệt map sử dụng for
for (let [key, value] of myMap) {
  console.log(key + "-" + value);
}

// Duyệt map sử dung foreachforeach

myMap.forEach((key, value) => {
  console.log(key + "-" + value);
});
