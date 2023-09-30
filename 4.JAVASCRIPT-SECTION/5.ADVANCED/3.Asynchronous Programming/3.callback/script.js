//Behaving as a normal function parameter/argument/variable

//create callback function

// function myCallbackFn() {
//   console.log("Hello this is a simple callback function");
// }

//Usage
// function logMessage(anything) {
//   //execute the callback fn
//   anything();
// }

//call HOF
// logMessage(myCallbackFn);

// logMessage(function () {
//   console.log("Hello this is a simple callback function");
// });

//: Returning a callback function method 1

// function logMessage(callback) {
//   //execute the callback fn
//   const result = callback();
//   console.log(callback());
// }

// logMessage(() => {
//   return "Hello this is a simple callback function";
// });

//Extracting Callback function

// function logMessage(callback) {
//   //execute the callback fn
//   const result = callback();
//   return result;
// }

// const result = logMessage(() => {
//   return "Hello this is a simple callback function";
// });
// console.log(result);

//passing parameters to the callback function
const logMessageHOF = (callback) => {
  const result = callback("Agnes", "Appiah");
  console.log(result);
};

const logMessageCallbackFn = (firstName, lastName) => {
  return `Hello ${firstName} ${lastName} this is a simple cb`;
};

//call HOF
//logMessageHOF(logMessageCallbackFn);

//HOF with parameter and call back function

const calculateSumHOF = (a, b, callback) => {
  const result = a + b;
  callback(result);
};

calculateSumHOF(2, 3, (result) => {
  console.log(result);
});
