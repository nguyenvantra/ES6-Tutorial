// Default Parameters trong es5
function showName(name) {
  if (name === undefined) name = "Nguyen Van Tra";
  return name;
}

console.log(showName()); // Nguyen Van Tra

//Default Parameters trong es6
function showName(name = "Nguyen Van Tra") {
  return name;
}
console.log(showName()); // Nguyen Van Tra
