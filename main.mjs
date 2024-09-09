// main.mjs
import { dayName, dayNumber } from "./dayName.mjs";

let now = new Date();
console.log(`Today is ${dayName(now.getDay())}`); // → Today is Monday

console.log(`The number for Friday is ${dayNumber("Friday")}`); // → The number for Friday is 5

//Renaming imports-Imported variables can be renamed
import {dayName as nomDeJour} from "./dayName.mjs";
console.log(nomDeJour(3));

//Importing a default export-no need of braces
import seasonNames from "./seasonname.mjs";
console.log(seasonNames);


import * as dayname from "./dayName.mjs";
console.log(dayname.dayName(3))


