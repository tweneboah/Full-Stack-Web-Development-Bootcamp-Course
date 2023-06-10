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

//Equal to (== / ===)
//Definition: This operator checks if the values of two operands are equal or not.

// Case study: You have two measurements of a wall, one from a string of "150" cm and the other from a laser measure of 150 cm. Are these two measurements equal in terms of their value?

let heightA = "150";
let heightB = 150;

// Not equal (!=)**
// Case study: You have 5 apples and 7 oranges. Are the quantities of apples and oranges not equal?

let apples = 5;
let oranges = 7;

// console.log(apples != oranges);

// Not equal value or not equal type (!==)
// Definition: This operator checks if the values and types of two operands are not equal.

// Case study: Using the measurements from the first case study, are these two measurements strictly not equal, considering both their value and data type?

// console.log(heightA !== heightB);
