//!Default Export
// import greet from "./utiils.mjs";
//!Name Export
// console.log(greet("Agnes"));
// import { add, subtract } from "./utiils.mjs";

// console.log(add(10, 5));
// console.log(subtract(10, 5));
//!//!Mixed Export(Default + Named)
// import greet, { subtract, add } from "./utiils.mjs";

// console.log(greet("Agnes"));
// console.log(subtract(100, 60));
// console.log(add(100, 60));

//!Import everything----
import * as utill from "./utiils.mjs";

console.log(utill.add(10, 50));
console.log(utill.subtract(10, 50));
