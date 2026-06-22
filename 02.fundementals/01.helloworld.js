let user = "hima bindu";
var age = "26";
var message = "don't marry be happy";

// second way of initializing variables
let user1 = "siva teja";
var age1 = "26";
var message1 = "don't worry be happy";

// testing the variable deep copy
age = age1;
age1 = "30";
message = message1;
message1 = "marry and be happy";

var a = (b = "test");
b = "best";

console.log;
// -- end of file --

/**   01 Assessment */

/**
 * * 01 Declare variables called country, continent and population and assign their values according to your own country (population in millions).
 * * 02 Log their values to the console.
 */

const country = "india";
const continent = "asia";
const population = 1400;

console.log(country);
console.log(continent);
console.log(population);

const javascriptIsFun = true;

console.log(typeof typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(year);
console.log(typeof year);

// --- playing with the const

const obj = {
  name: "hima bindu",
  age: 26,
  message: "wife",
};

const obj2 = {
  name: "siva teja",
  age: 26,
  message: "husband",
};

// obj = {
//   ...obj,
//   isMarried: true,
// };

// console.log(obj);
/* *
 * the above code will throw an error because we cannot reassign a new value to a const variable.
 * However, we can modify the properties of the object that is assigned to the const variable.
 **/

obj.javascriptIsFun = true;
console.log(obj);

/** playing with arrays */

const fruits = ["apple", "banana", "orange"];
console.log(fruits);

const fruits2 = ["grapes", "mango", "kiwi"];

fruits.push("watermelon");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.unshift("strawberry");
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.splice(1, 1);
console.log(fruits);

fruits.splice(1, 0, "pear");
console.log(fruits);

const fruits3 = fruits.concat(fruits2);
console.log(fruits3);   

fruits = fruits1 
console.log(fruits); // this will throw an error because we cannot reassign a new value to a const variable.