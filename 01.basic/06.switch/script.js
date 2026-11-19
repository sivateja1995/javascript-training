// switch statement
// here is the code for the switch statment\



/**
 * * if there is no break in the statement it will execute the rest of the code that is othere case 
 * * eg: in case monday if there is no break it will print both "holy crap it's monday" & "ok it's not monday but ok" both the statents
 */

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const currentDayName = days[new Date().getDay()];

const day = currentDayName.toLowerCase();
console.log("day ===>", day);

switch (day) {
  case "monday":
    console.log("holy crap it's monday");
    break;
  case "tuesday":
    console.log("ok it's not monday but ok");
    break;
  case "wednesday":
    console.log("oh WFH, we are in the middle of the week");
    break;
  case "thursday":
    console.log("howday !! dude onemore day");
    break;
  case "friday":
    console.log("what's up bi**es, it going to weekend");
    break;
  default:
    console.log("its a weekend baby");
    break;
}
