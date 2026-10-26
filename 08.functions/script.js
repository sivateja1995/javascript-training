function logger(message) {
    console.log(message);
}   



logger('my name is sivateja');



function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


// above are called function declaration, below is function expression
const calcAge = function (birthYear) {
    return 2026 - birthYear;
}

const age = calcAge(1995);
console.log(age);