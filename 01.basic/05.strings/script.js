const firstName = "sivateja";
const job = "developer";
const birthYear = 1995;
const year = 2026;

const sivateja = "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(sivateja);

const sivatejaNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(sivatejaNew);

console.log(`just a regular string...`)

console.log('string with \n\
multiple \n\
lines');

console.log(`string with 
multiple 
lines`);



// if else conditional block
const dateOfBirth = "05-09-1995";
const currentYear = new Date().getFullYear();

const currentAge = currentYear - new Date(dateOfBirth).getFullYear();

currentAge > 18 ? console.log(`You are ${currentAge} years old, you are eligible to vote.`)
: console.log(`You are ${currentAge} years old, you are not eligible to vote.`);