//Example 1 with Callback

//creation
function simpleCb(success, cb) {
  console.log("Cb function called");
  if (success) {
    cb(null, "The operation was successful");
  } else {
    cb("The operation failed", null);
  }
}

//usage
// simpleCb(false, (err, result) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }
//   console.log("This always log regardless of the operation");
// });

//Example 1 convert to use promise

//creation

// const simplePromise = new Promise((resolve, reject) => {
//   const success = false;
//   if (success) {
//     //resolve the promise
//     resolve("The promise operation was successful");
//   } else {
//     //reject the promise
//     reject("The promise operation failed");
//   }
// });

//usage
// simplePromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("This always log regardless of the operation");
//   });

//Example 2 convert to use promise
function isEvenNumber(number, cb) {
  if (number % 2 === 0) {
    cb(null, `The number ${number} is even`);
  } else {
    cb(new Error(`The number ${number} is not even`));
  }
}

//usage
// isEvenNumber(5, (err, result) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log(result);
//   }
// });

//Creation
function isEvenNumberPromise(number) {
  return new Promise((resolve, reject) => {
    if (number % 2 === 0) {
      //resolve the promise
      resolve(`The number ${number} is even`);
    } else {
      //reject the promise
      reject(`The number ${number} is not even`);
    }
  });
}

//call the fn/resolve
isEvenNumberPromise(4)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
