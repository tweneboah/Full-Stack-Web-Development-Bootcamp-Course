//----
//Syntax of  Function declaration
//----
//calling the function/invoke/use the function
// sayHello()
//say hello
// function sayHello(){
//     //logic goes here
//     //write any logic
//     console.log('Hello world');
// }

//greeting
// function greetings(){
//     console.log('Welcome to Masynctech');
// }
//invoke
// greetings()
//show date
function showDate() {
  const currentDate = new Date();
  console.log(`Todays date is ${currentDate}`);
}
//invoke
// showDate()

//---
//Function expression
//---

//invoke
// sayHello()

const sayHello = function () {
  console.log("Hello world");
};

// const greetings = function () {
//   console.log("Welcome to Masynctech");
// };

//invoke
//  greetings()

//Determines if a fixed number (e.g., 4) is even or odd.
const checkEvenOrOdd = function () {
  const number = 5;
  if (number % 2 === 0) {
    console.log("This is an even number");
  } else {
    console.log("This is an odd number");
  }
};

//checkEvenOrOdd();

//---
// Anonymous functions
//--

// function(){
//     console.log('Weclome');
// }

//--
//Immediately Invoked Function Expression (IIFE)
//

(function () {
  //   console.log("Weclome");
})();

// Calculating Square of a Number
(function () {
  const num = 5;
  const square = num * num;
  //   console.log(square);
})();

//Concatenating Strings

(function () {
  const str1 = "Hello";
  const str2 = "World";
  const result = str1 + " " + str2;
  //   console.log(result);
})();

//--
//Function parameters vs arguments
//--
//DRY = Don't repeat yourself
const greetings = function (name, age) {
  //   console.log(name);
  //   console.log(age);
  console.log(`Welcome ${name} your age is:${age} years`);
};

// greetings("Emma", 27);
// greetings("Alice", 24);

//function to add any two numbers

const addTwoNumbers = function (a, b) {
  const result = a + b;
  console.log(result);
};

// addTwoNumbers(9000, 111);

//---
// Default parameters
//

//Basic Default Parameters

const greet = function (name = "Guest", age = 17) {
  console.log(`Hello, my name is ${name}, and I am ${age} years old`);
};

// greet("Emma", 30);
//Default Parameters with Expression

const multiply = function (a, b = a * 2) {
  const result = a * b;
  // console.log(`The Result is ${result}`);
};

// const myFnCall = multiply(2);

// console.log(myFnCall);

//---
//Return Statement
//--
//Basic Return Statement
const add = function (a, b) {
  const result = a + b;
  // console.log("Before return");
  // console.log("After the return");
  return result;
};

const addResult = add(2, 2);

// console.log(addResult);

// Return Statement with Conditionals
function isEven(num) {
  if (num % 2 === 0) {
    return "It is an even number";
  } else {
    return "It is not an even number";
  }
}

// console.log(isEven(3));
//--
//Function Scope
//--

// Local Variable in Function

function showLocalVariable() {
  const localVar = "I am a local variable";
}
// console.log(localVar);
// showLocalVariable();

// Variable in Outer and Inner Function
const globalVar = "I am a global variable";

function outerFn() {
  const outerVar = " I am an outer variable";

  function innerFn() {
    const innerVar = "I am an inner variable";
    console.log(outerVar);
  }
  innerFn();
}

outerFn();

console.log(globalVar);
