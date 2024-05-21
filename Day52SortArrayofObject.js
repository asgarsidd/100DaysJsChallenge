const arr = [
  { name: "Rahul", age: 32, place: "Pune" },
  { name: "Kishan", age: 28, place: "Rajasthan" },
  { name: "Shariq", age: 25, place: "UP" },
  { name: "Jack", age: 23, place: "Tokyo" },
];

// Sort the object by age through map function 👴👵
const sortAge = arr
  .map((el) => {
    return el.age;
  })
  .sort((a, b) => {
    return a - b;
  });

// Sort this through inbuilt sort() method for all objects data with details 📊
const sortAge2 = arr.sort((a, b) => {
  return a.age - b.age;
});

console.log(sortAge2);
/*[
    { name: 'Jack', age: 23, place: 'Tokyo' },
    { name: 'Shariq', age: 25, place: 'UP' },
    { name: 'Kishan', age: 28, place: 'Rajasthan' },
    { name: 'Rahul', age: 32, place: 'Pune' }
  ] */
console.log(sortAge);
// Output : [23, 25, 28, 32]
