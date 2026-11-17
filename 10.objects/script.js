// const obj = {
//   name: "sivateja",
//   age: 31,
// };

// // below will throw an error because of const declaration
// // obj = {
// //     friends : ['siva', 'teja', 'kumar']
// // }
// // console.log('overriding the object', obj);
// // to avoid the error we can use the spread operator to create a new object with the updated properties
// obj.friends = ["siva", "teja", "kumar"]; // this will not throw an error because we are not reassigning the obj variable, we are just adding a new property to the existing object
// console.log("using the spread operator the object", obj);
// const newProperty = prompt("Enter a new property name: ");
// const newValue = prompt("Enter a new value for the property: ");
// obj[newProperty] = newValue; // this will add a new property to the object with the name entered by the user and the value entered by the user
// console.log("after adding a new property to the object", obj);
// obj.location = 'Hyderabad'; // this will add a new property to the object with the name 'location' and the value 'Hyderabad
// // this will not throw an error because we are not reassigning the obj variable, we are just adding a new property to the existing object
// console.log("after adding a new property to the object", obj);
// obj.twitter = '@sivateja'; // this will add a new property to the object with the name 'twitter' and the value '@sivateja'
// console.log("after adding a new property to the object", obj);
// const value = 10 * 10 - 10 ;
// console.log('value of the expression 10* 10 - 10 is', value)

/**
 * * object functions
 */

const obj2 = {
  firstName: "siva",
  lastName: "teja",
  dateOfBirth: "1995-09-06",
  friends: ["siva", "teja", "kumar"],
  location: "Hyderabad",
  twitter: "@sivateja",
  job: "Software Engineer",
  name: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  age: function () {
    return new Date().getFullYear() - new Date(this.dateOfBirth).getFullYear();
  },
};


// console.log("name of the object is", obj2.name());
// console.log("age of the object is", obj2.age());
// function checkThis() {
//   console.log(typeof this, this);
// }

// // Non-strict mode:
// checkThis.call(42);        // "object", [Number: 42] (boxed into a Number wrapper object)
// checkThis.call(null);      // "object", Window / globalThis

// // Strict mode ("use strict"):
// checkThis.call(42);        // "number", 42 (raw primitive)
// checkThis.call(null);      // "object", null




// checking for the vote 
if(obj2.age() >= 18){
    console.log('You are eligible to vote');
}else{
    console.log('You are not eligible to vote');
}