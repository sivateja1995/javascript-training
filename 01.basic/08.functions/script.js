// logger("my name is sivateja"); // hoisting is not applicable for function expressions, so this will throw an error if called before the function is defined.
// function logger(message) {
//   console.log(message);
// }

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// // above are called function declaration, below is function expression
// const calcAge = function (birthYear) {
//   return 2026 - birthYear;
// };

// const age = calcAge(1995);
// console.log(age);

// // anonymous functions

// const calage2 = function (birthYear) {
//   return 2026 - birthYear;
// };

// console.log(calage2(1999));

// /*
//  *
//    * Arrow functions are a more concise way to write functions in JavaScript. They are often used for short,
//   * single-line functions, and they do not have their own 'this' context.
//  */

// const calcAge3 = (birthYear)=>{
//     const currentYear = new Date().getFullYear();
//     return currentYear - birthYear;
// }

// console.log('my current age using the arrow function is: ', calcAge3(1995));

// cutting the down the fruits

// function cuttingOfFruits(fruit) {
//   return fruit * 3;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cuttingOfFruits(apples);
//   const orangePieces = cuttingOfFruits(oranges);

//   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));
