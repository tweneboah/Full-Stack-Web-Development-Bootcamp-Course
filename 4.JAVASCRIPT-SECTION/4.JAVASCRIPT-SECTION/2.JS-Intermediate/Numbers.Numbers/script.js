//Converting a Number to a String
const age = 30
const ageStr = age.toString()

//Displaying a Price
const price = 19.99;

//  const displayPrice = "The price is $" + price.toString();
// const displayPrice = `The price is $${price}` ;
//console.log(displayPrice);

//Using `toString()` with Different Bases

const decimalNum = 10;
const binaryStr = decimalNum.toString(2)
const hexStr = decimalNum.toString(16)
// console.log(hexStr);


//Working with BigInt
const bigIntNum = BigInt('90071938455566')
// console.log(bigIntNum.toString());

//Formatting Currency
const productPrice = 49.955
const formattedPrice = productPrice.toFixed(4);

//Scientific Data
const piApprox = 3.14179
const roudedPI = piApprox.toFixed(3)

//Calculating Body Mass Index (BMI)

const weightKg = 70;
const heightM = 1.75;
const BMI = (weightKg / (heightM ** 2))

//Scientific Data Representation
const avogadroNumber  = 6.02214076e23

const scientificNotation = avogadroNumber.toExponential()



const num = 10;
const exponatedNum = num ** 2 //10*10

// console.log(exponatedNum);

//Converting User Input to Integer
const userInput = '42'
const userAge = parseInt(userInput, 10)


//Extracting Price from a Text
const priceText = "Price: 100 USD"
const extractedPrice = parseInt(priceText.replace("Price:","").replace("USD",""), 10)

//Converting Binary Data from a Sensor
const sensorData = "1101"
const sensorDataDecimal = parseInt(sensorData, 2)


//Converting Price for an E-commerce Checkout
const checkoutPrice = "99.99";

const checkoutPriceFloat = parseFloat(checkoutPrice.replace("$",""))

//Extracting Temperature Data from a Weather API
const apiTempData = "Temperature: 23.5°C";
const actualTempData = parseFloat(apiTempData.replace("Temperature:","").replace("°C",""))

//Calculating Grade Point Average (GPA)
const inputGPA ="3.8";
const parsedGPA =parseFloat(inputGPA)

// if(isNaN(parsedGPA)){
//     console.log('Inavalid GPA input');
// }else{
//     console.log(`Your GPA is ${parsedGPA}`);
// }

//Calculating Savings After a Transaction
const initialSavings = '1000';
const widthdrawal = 'Hello'
const newSavings = parseFloat(initialSavings) - parseFloat(widthdrawal);

// if(isNaN(newSavings)){
//     console.log('Invalid transaction');
// }else{
//     console.log(`Your new savings amount is ${newSavings}`);
// }

//Computing the Area of a Circle

const radiusInput = '7';
const radius = parseFloat(radiusInput)
const area = Math.PI * Math.pow(radius, 2);
// if(isNaN(area)){
//     console.log('Invalid radius');
// }else{
//     console.log(`The area of the circle is ${area}`);
// }


//Validating User Input for Discount Calculation
// const originalPrice = parseFloat(prompt('Enter the original Price'));
// const discoutRate = parseFloat(prompt('Enter the discount rate'))
// let discountPrice;

// if(isFinite(originalPrice) && isFinite(discoutRate)){
//     discountPrice = originalPrice - (originalPrice*discoutRate/100);
//     console.log(`The discounted price is ${discountPrice}`);
// }else{
//     console.log("Invalid input:please enter finite number");
// }

//------
//Math.round() Method
//------


//Rounding a Grade Point

const gradePoint = 3.4;
const roundedPoint = Math.round(gradePoint)

//Rounding Age
const actualAge = 29.1;
// console.log(Math.round(actualAge));


//-----
//Math.floor() and Math.ceil() Methods
//-----

//Rounding Down with `Math.floor()`
const totalPosts = 27;
const postPerPage = 5;

const totalPages = totalPosts/postPerPage;
const convertedPage = Math.floor(totalPosts/postPerPage)

// console.log(convertedPage);

//-----
// Rounding Up with `Math.ceil()`
///-----

const rawTaxAmount = 35.1;
const roundedTaxtAmt = Math.ceil(rawTaxAmount)

// console.log(roundedTaxtAmt);

//----
//Math.random() Method
//-----

// Generating a Random Number Between 0 and 1

const randomNum = Math.random();

//Generating a Random Number Between 0 and 100

const scaledRandomNum = Math.random() * 100

// console.log(Math.ceil(scaledRandomNum));

// Rolling a Die

const dieRoll = Math.random() * 6 + 1
// console.log(Math.floor(dieRoll));

//Generating a Random Number Between 20 and 40
const min = 20;
const max = 40;
const randomNumber = Math.random() * (max-min) + min

// console.log(Math.floor(randomNumber));

//----
//Using Math.sqrt()
//---

//Basic Usage
const myNum = 25
const result = Math.sqrt(myNum)
// console.log(result);

//Using With Pythagorean Theorem

const a=3;
const b = 4
const c  = Math.floor(Math.sqrt(a*b + b*b));
// console.log(c);

//----
//`Math.min()` and `Math.max()` methods in JavaScript.
//----

// Finding the minimum value
const smallestNum = Math.min(5,8,3,10,5,6)
// console.log(smallestNum);

// Finding the maximum value
const maximumNum = Math.max(5,8,3,10,5,6)
// console.log(maximumNum);

//----
//Math.abs() Method
//----
console.log(Math.abs('dd'));