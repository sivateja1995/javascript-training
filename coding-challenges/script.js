/** 
 * Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
 */

const markMass = 78;
const markHeight = 1.69;

const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / (johnHeight * johnHeight);

const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);

// 2nd case

const markMass2 = 95;
const marksHeight2 = 1.88;

const johnMass2 = 85;
const johnHeight2 = 1.76;

const markBMI2 = markMass2 / marksHeight2 ** 2;
const johnBMI2 = johnMass2 / (johnHeight2 * johnHeight2);

const markHigherBMI2 = markBMI2 > johnBMI2;

console.log("marks bmi  second case ", markBMI2);
console.log("john bmi  second case ", johnBMI2);

console.log('second case verdict ===>', markHigherBMI2)