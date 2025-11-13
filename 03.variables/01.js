let admin;
let name;
name = "John";
admin = name;
console.log(admin);

// calcualte the age
const birthday = "18.04.1982";
const fromattedBirthday = birthday.split(".").reverse().join("-");
console.log('formatted birthday:',fromattedBirthday);   
const birthDate = new Date(fromattedBirthday);
console.log('year',new Date(birthDate).getFullYear());

const age = new Date().getFullYear() - new Date(fromattedBirthday).getFullYear();
console.log(age);
// -- end of file --s
