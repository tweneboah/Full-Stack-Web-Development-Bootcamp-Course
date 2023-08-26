//Case study
//Consider an e-commerce system where a user wants to purchase an item. The system has to check if the item is in stock before proceeding with the purchase:

let inStock = true;

if (inStock) {
  console.log("Item is instock, Proceeding with your purchase");
}

//----------
//Case study 2
//-------
//Suppose you're creating a website where users must be at least 18 years old to register. Here's how you might use an if statement to check a user's age:

let userAge = 17;
if (userAge >= 18) {
  console.log("You are eligible");
}

//---Else stament----
///case 1:
//Suppose you're developing a website and you want to personalize a message for users based on whether they're logged in or not:

let isLoggedIn = false;

if (isLoggedIn) {
  console.log("Welcome back, user");
} else {
  console.log("Welcome guest, please login");
}

//case 2;
//Imagine you're designing an online voting system. In this system, users can only vote if they're registered. Here's how you might use an if-else statement to check a user's status:

let isRegistered = true;
if (isRegistered) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible, please register");
}

//-----ELSE IF STATEMENT----
//Case study 1
//Let's consider a traffic light system where you want to tell a driver what to do based on the color of the traffic light. Here's how you might use an else if statement for this purpose:

let trafficlight = "pink";
if (trafficlight === "red") {
  console.log("Stop");
} else if (trafficlight === "yellow") {
  console.log("Prepare to stop");
} else if (trafficlight === "green") {
  console.log("Go");
} else {
  console.log("Invalid traffic");
}

//-----SWITCH STATEMENT----
//Case study 1:
//Suppose you are building a calendar application and you need to display the day of the week based on the number provided (0-6, Sunday-Saturday).

let dayNumber = 9;

switch (dayNumber) {
  case 0:
    console.log("Sunday");
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day number");
}
