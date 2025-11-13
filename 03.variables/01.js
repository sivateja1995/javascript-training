let admin;
let name;
name = "John";
admin = name;

// calcualte the age
const birthday = "18.04.1982";
const fromattedBirthday = birthday.split(".").reverse().join("-");

const birthDate = new Date(fromattedBirthday);

const age =
  new Date().getFullYear() - new Date(fromattedBirthday).getFullYear();

// -- end of file --s
