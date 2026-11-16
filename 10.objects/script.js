const obj = {
  name: "sivateja",
  age: 31,
};

// below will throw an error because of const declaration
// obj = {
//     friends : ['siva', 'teja', 'kumar']
// }
// console.log('overriding the object', obj);
// to avoid the error we can use the spread operator to create a new object with the updated properties
obj.friends = ["siva", "teja", "kumar"]; // this will not throw an error because we are not reassigning the obj variable, we are just adding a new property to the existing object
console.log("using the spread operator the object", obj);
const newProperty = prompt("Enter a new property name: ");
const newValue = prompt("Enter a new value for the property: ");
obj[newProperty] = newValue; // this will add a new property to the object with the name entered by the user and the value entered by the user
console.log("after adding a new property to the object", obj);