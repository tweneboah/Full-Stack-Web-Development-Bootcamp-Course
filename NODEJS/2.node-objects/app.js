//--Accessing the global object---

//Accessing the global object
global.myGlobal = "Hello from the global object";

// To check if our variable is truly global

//console.log(__dirname);
console.log(__filename);

//!Using `setInterval` and `clearInterval
// let count = 0;
// const intervalId = setInterval(() => {
//   console.log("Hello word");
//   count++;
//   if (count === 5) {
//     clearInterval(intervalId);
//   }
// }, 1000);

//setTimeout
setTimeout(() => {
  console.log("This will be delayed by 5S");
}, 5000);
