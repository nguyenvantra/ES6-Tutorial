if(true){
  let x = 10;
  console.log(x); // in ra 10;
}
console.log(x); //Uncaught ReferenceError: x is not defined

{
  const name = 'Nguye Van Tra';
  name = 'darkness'; // Uncaught TypeError: Assignment to constant variable.

  console.log(name); // Nguyen Van Tra
}

{
  console.log(name); // undefined
}
