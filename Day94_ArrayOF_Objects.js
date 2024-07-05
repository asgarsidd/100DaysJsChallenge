//This is Group of cars in Array of object formats
let cars = [
  {
    color: "purple",
    type: "minivan",
    registration: new Date("2017-01-03"),
    capacity: 7,
  },
  {
    color: "red",
    type: "station wagon",
    registration: new Date("2018-03-03"),
    capacity: 5,
  },
  {
    color: "blue",
    type: "sedan",
    registration: new Date("2019-05-01"),
    capacity: 4,
  },
  {
    color: "silver",
    type: "SUV",
    registration: new Date("2020-02-15"),
    capacity: 6,
  },
  {
    color: "black",
    type: "coupe",
    registration: new Date("2016-08-20"),
    capacity: 2,
  },
  {
    color: "red",
    type: "truck",
    registration: new Date("2015-11-10"),
    capacity: 3,
  },
];

//Find an object in an array by its values - Array.find for single first index Output which matched.
let carByRed = cars.find((car) => car.color === "red");
console.log(carByRed);

// Find an object in an array by its values - Filter which select all the car Which are red.
let redFilterCar = cars.filter((car) => {
  return car.color === "red";
});
console.log(redFilterCar);
/* Output 
[
  {
    color: 'red',
    type: 'station wagon',
    registration: new Date('2018-03-03T00:00:00.000Z'),
    capacity: 5
  },
  {
    color: 'red',
    type: 'truck',
    registration: new Date('2015-11-10T00:00:00.000Z'),
    capacity: 3
  }
] */
console.log(carByRed);
