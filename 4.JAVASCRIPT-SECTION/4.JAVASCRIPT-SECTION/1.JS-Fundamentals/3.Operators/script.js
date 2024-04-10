//! Arithemetic Operators
//Addition operator (+) adds two numbers together

const applesOnHand = 90;
const applesReceived = 10297323;
const totalApples = applesOnHand + applesReceived;

// Subtraction operator (-) subtracts one number from another
const totalTickets = 100;
const ticketSold = 45;

const ticketsLeft = totalTickets - ticketSold;

// Multiplication operator (*) multiplies two numbers

//if one book costs $20 and someone buys 15

const bookCost = 20;
const booksBought = 15;
const totalCost = bookCost * booksBought;

// Division operator (/) divides one number by another
//if there are 200 pages in a book and you read 40 pages per day, you will finish in 5 days

const totalPages = 200;
const pagesPerDay = 40;
const daysToFinish = totalPages / pagesPerDay;

// Remainder or modulo operator (%) divides one number by another and returns the remainder

//if 10 people are at a party and there are 3 pizzas, each person gets 3 slices, and 1 slice is left over

const peopleParty = 10;
const pizzasAtParty = 3;
const sliceLfetOver = peopleParty % pizzasAtParty;

// Increment operator (++) increases a number by 1
// case study if a website has 1000 views and then one person visits, what will be the total views
let currentWebsiteViews = 1000;
currentWebsiteViews++;

// Decrement operator (--) decreases a number by 1
// e.g. if a basketball player has 20 points and a point is taken away, they now have 19 points

let baseketballPoints = 20;
baseketballPoints -= 1000;

//! Assigment Operators
// Assignment operator (=)

// Definition: The assignment operator assigns a value to a variable.

// Case study: You just purchased 10 apples from the grocery store. How can you use JavaScript to keep track of how many apples you now have?

let myTotalApples = 10;

// Assignment operator (+=)

// Definition: The addition assignment operator adds the value on the right to the variable on the left and then assigns the result to the variable on the left.

// Case study: As the mayor of a small town, the current population of your town is 100. During the year, an additional 50 people moved to your town. How would you calculate the total population now?

let population = 100;

//!
population += 50;

// Assignment operator (-=)
// Case study: You have $200 in your wallet. After buying a book for $30, how can you calculate how much money you now have in your wallet?

let moneyInWallet = 200;
moneyInWallet -= 30;

// Assignment operator (*=)
// Case study: You have 12 cookies and decide to break each one into 3 pieces to share with your friends. How would you calculate the total number of cookie pieces you have now?

let cookiesInJar = 12;
cookiesInJar *= 3;

// Division assignment operator (/=)
// Case study: You have a 200-page book that you want to study over the next 5 days, planning to read the same number of pages each day. How would you calculate how many pages you need to read each day?

let myTotalPages = 200;
myTotalPages /= 5;

// Remainder assignment operator (%=)

// Case study: You have 25 concert tickets that you want to distribute equally among 4 friends. How would you calculate the number of leftover tickets?

let tickets = 25;
tickets %= 4;

// Exponentiation assignment operator (**=)
// Case study: In a math problem, you are given a base number of 2 and asked to raise this number to the power of 4. How would you calculate this?

let base = 2;
base **= 4;

//! Comparison Operators: Used to compare values.
//Equal to (== or ===)
// Definition: The 'equal to' operator checks if the values of two operands are equal or not, regardless of their type.

// Case Study: You have two different measurements of height, one from an input field (string) and the other from a calculated result (number). You need to know if they represent the same height.

let heightA = "150"; //string
let heightB = 150; //number

// const result = heightA === heightB;

//  Not equal (!=)
// Definition: The 'not equal' operator checks if the values of two operands are different, regardless of their type.

// Case Study: You want to know if the number of apples you have is different from the number of oranges.

let apples = 5;
let oranges = 7;

// const result = apples != oranges;

// Not equal value or not equal type (!==)
// Definition: The 'not equal value or not equal type' operator checks if the values and/or types of two operands are not identical.

// Case Study: Once again, you have two height measurements, but you want to know if they are not the same value and/or type.

heightA !== heightB;

// Greater than (>)
// Case Study: You have two cars and you want to know if the first car is moving faster than the second car.

let speedA = 60;
let speedB = 50;

// let result = speedA > speedB;
// Greater than (>)
speedA < speedB;

// Greater than or equal to (>=)
// Definition: The 'greater than or equal to' operator checks if the value of the left operand is greater than or equal to the value of the right operand.

// Case Study: You're comparing the weight of two boxes and want to know if the first box weighs as much as or more than the second box.

let weightA = 60;
let weightB = 50;

weightA <= weightB;

//! Logical Operators:

//Logical AND (&&)
// Definition: The logical AND operator returns true if both operands are true. Otherwise, it returns false.

// Case Study: You want to decide whether to go to the park based on two conditions: if it's sunny and warm outside.

let isSunny = false;
let isWarm = true;
let shouldGoTopark = isSunny && isWarm;

// Logical OR (||)
// Definition: The logical OR operator returns true if either or both of the operands are true. It returns false only if both operands are false.

// Case Study: You want to check if it's not raining so that you can go outside.

let isRaining = false;
let isSnowy = false;
let isNight = true;
const result = isRaining || isSnowy || isNight;

//! String Operators (+)
// Let's consider a case where you want to create a personalized greeting message by combining a fixed greeting string with a variable name string.

let greeting = "Hello, ";
let firstName = "Thomas";
let lastName = "Tweneboah";
let message = greeting + firstName + " " + lastName;

//+=

let sentence = "I love";
sentence += " " + "Javascript";

let value = "10" + 10;
