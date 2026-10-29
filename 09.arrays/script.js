const names = ["Alice", "Bob", "Charlie", "David", "Eve"];

// Accessing elements in the array
console.log(names[0]); // Output: Alice
console.log(names[2]); // Output: Charlie       

const years = [1990, 1985, 2000, 2010, 1995];
// Accessing elements in the array
console.log(years[1]); // Output: 1985
console.log(years[3]); // Output: 2010

// Modifying elements in the array
names[1] = "Bobby";
console.log(names); // Output: ["Alice", "Bobby", "Charlie", "David", "Eve"]

years[2] = 2005;
console.log(years); // Output: [1990, 1985, 2005, 2010, 1995]



// calculating the ages 
const currentYear = new Date().getFullYear();
const ages = years.map(year => currentYear - year);
console.log(ages); // Output: undefined (forEach does not return a new array)