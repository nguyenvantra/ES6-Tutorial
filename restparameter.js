var data = function(id, name, ...other) {
  console.log(id); // 13130317
  console.log(name); // Nguyen Van Tra
  console.log(other); // ["Nha Giau", "Dep Trai"]
}

data("13130317", "Nguyen Van Tra", "Nha Giau", "Dep Trai");

// Su dung Arrow Function

var data = (id, name, ...other) => {
  console.log(id); // 13130317
  console.log(name); // Nguyen Van Tra
  console.log(other); // ["Nha Giau", "Dep Trai"]
}
data("13130317", "Nguyen Van Tra", "Nha Giau", "Dep Trai");
