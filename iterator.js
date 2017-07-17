var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Cách cũ, duyệt từ đầu
for(var i = 0; i< numbers.length; i ++)
{
  console.log(number[i]);
}
// Dùng forEach
numbers.forEach(function(number) {
  console.log(number);
})

// Dùng for...of
for(var number of numbers) console.log(number);
