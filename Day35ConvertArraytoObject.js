const convertObjtoArray = (obj) => {
  // Convert the object into an array of key-value pairs👇
  console.log(Object.entries(obj)); //--Output : [ [ 'name', 'ASGAR' ], [ 'age', 24 ], [ 'city', 'Bangalore' ] ]
  console.log(Object.entries(obj).flat()); //--Output :  [ 'name', 'ASGAR', 'age', 24, 'city', 'Bangalore' ]

  // convert the array of key-value pairs back to an object👇
  console.log(Object.assign({}, obj)); //--Output : { name: 'ASGAR', age: 24, city: 'Bangalore' }
  //                               ----OR-----
  console.log(Object.fromEntries(Object.entries(obj)));
  // fromEntries() Returns an object created by key-value entries for properties and methods
};

console.log(convertObjtoArray({ name: "ASGAR", age: 24, city: "Bangalore" }));
