var showName = (name) => {
  console.log(name);
};

showName('Nguyen Van Tra'); // Nguyen Van Tra

// Error
var student = {
  id: "13130317",
  name: "Nguyen Van Tra",
  showData: function(callFunc) {
    callFunc();
  },
  render: function() {
    this.showData(function() { // this này thuộc đối tượng student nên ok
      console.log(this.id); // id không tồn tại vì this là đối tượng window
      console.log(this.name); // name không tồn tại vì this là đối tượng window
    });
  }
};
student.render();

// Su dung ham bind() es5
var student = {
  id: "13130317",
  name: "Nguyen Van Tra",
  showData: function(callFunc) {
    callFunc();
  },
  render: function() {
    this.showData(function() {
      console.log(this.id);
      console.log(this.name);
    }.bind(this));
  }
};
student.render();

// Su dung Arrow Function es6
var student = {
  id: "13130317",
  name: "Nguyen Van Tra",
  showData: function(callFunc) {
    callFunc();
  },
  render: function() {
    this.showData(() => {
      console.log(this.id);
      console.log(this.name);
    });
  }
};
student.render();
