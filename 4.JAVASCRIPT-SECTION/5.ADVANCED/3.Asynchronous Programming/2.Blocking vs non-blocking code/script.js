//---Create a blocking----

// console.log("Starting Blocking Operations");
// //Create blocking code
// for (let i = 0; i < 1e9; i++) {
//   //simulate some operations
//   console.log(i);
// }
// console.log("Finished Blocking Operations");

//---Create a non blocking----

console.log("starting non Blocking Operations");
setTimeout(() => {
  console.log("Executing delay");
}, 4000);
console.log("Finished non Blocking Operations");
