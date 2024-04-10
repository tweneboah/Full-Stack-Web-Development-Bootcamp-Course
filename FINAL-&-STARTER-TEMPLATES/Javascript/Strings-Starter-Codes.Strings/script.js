//---------
//==SINGLE, DOUBLE AND CONSTRUCTOR===
//----------

//Single quotes
const singleQuoteString = "This is a string using single quoutes";

//double quotes
const doubleQuoteString = "This is a string using double quoutes";

//Using the string constructor
const stringConstructor = new String(
  "This is a string using the string constructor quoutes"
);

//---------
//==TEMPLATE LITERALS===
//----------

//Basic usage
const greeting = `Hello, world`;

//String interploation
const username = "Emma";
const welcomeMessage = `Hello, ${username}! welcome to our website`;

//Multiline-string
const poem = `
Roses are red,
violets are blue,
Sugar is sweet,
And so are you?
`;

//Expression evaluation
const price = 10;
const tax = 0.05;
const total = `The price: ${price * (1 + tax)}`;

//Escaping backtics
const stringWithBacktick = `He's a backtick \``;

//---------
//==ESCAPING CHARACTERS IN STRINGS===
//----------

//Using backslahes before escaping
const quote = 'He said, "Hello, world"'

//NewLines and Tabs

const multiline = "Line 1\nLine 2\tTabbed"

//Escaping backslashes
const filePath = "c:\\Program files\\App"

//Using the Template literals
const anotherQuote = `He said, "That's awesome"`

//Unicode characters
const heart = "I \u2764 Javascript"

// Escape Sequence for a Dollar Sign and Curly Braces in Template Literals
const metaString = `The syntax for variable is \${variableName}`


//---------
//==STRING CONCATENATION===
//----------
//using the + operator
const firstname = 'Ben';
const lastname = 'Emma';
const fullname = firstname + " " + lastname;

//using the .concat() method
const str1 = 'Hello';
const str2 = 'World'

const combinedStr = str1.concat(" ",str2)

//Template literal
const fruit = 'apple';
const color = 'red';

const sentence = `The ${fruit} is  ${color}`


//---------
//==TOLOWER AND TOUPPER CASE===
//----------

//toUpperCase()
const localCaseStr = "Hello, world";
// const result = localCaseStr.toLocaleUpperCase()

//toLowerCase()
const upperCaseStr = "HELLO, WORLD";
// const result = localCaseStr.toLocaleLowerCase()

//Mixing both methods
const mixStr = "HeLLo, WoRLD"

// const result = mixStr.toLocaleLowerCase();

// const result = mixStr.toUpperCase();

//case-insensitive comparison
const string1 = 'Javascript';
const string2 = 'javascript';

if(string1.toLowerCase() === string2.toLowerCase()){
  //console.log('The strings are equal, ignoring the case');
}

//Note on non-english characters
const accentedStr = 'áéíóú"';

// const result = accentedStr.toLocaleUpperCase()


//---------
//==STRING LENGTH===
//----------

//Find the length of a string
const myStr = 'Hello, world'
const strLength = myStr.length

//Check for empty string
const emptyStr = "";

// const result = emptyStr.length

//string validation
const username1 = 'Emma';
if(username1.length >= 6){
 // console.log('Valid username');
}else{
 // console.log('Invalid user, Must be at least 6 characters');
}

//---------
//==STRING SLICE===
//----------

//Basic use
const greeting1 = 'Hello, world';
const extractedWord = greeting1.slice(7, 90)

//omitting the end index
const text = 'Hello, world'
// const result = text.slice(7, 9)

//using negative indices
const phrase = 'Hello, world';
const endingText = phrase.slice(-6);


//slicing between negative indices
const sentence2 = 'Hello, world';
const result3 = sentence.slice(-6,-1)

//---------
//==STRING SPLIT===
//----------

//Simple split by space
const mySentence = 'Hello, world';
const words = mySentence.split(',')

//Limit number od split
const fruits = "apple,banana,pear";
const limitedFruits = fruits.split(',',1)

//Split by multiple characters
const complextText = "apple:banana;pear"
const mixedFruits = complextText.split(/[:;]/)

//split into characters
const word = 'Emmanuel';
const letters = word.split("")

//---------
//==STRING INDEXOF===
//----------

//Basic usage
const sentences = 'Hello,world';
const index = sentences.indexOf('hello');

//---------
//==STRING TRIM===
//----------
//Trimming user input
const userInput = '   emma@gmail.com   ';
const emailTrimmed = userInput.trim()

//Removing Line Breaks
const stringsWithBreaks = '\n\t Hello, World';
const cleanString = stringsWithBreaks.trim()

//---------
//==STRING REPLACEMENT===
//----------

//Basic usage
const originalText = 'This is an old text.';
const updatedText = originalText.replace('Old','new');

//Replace all occurances
const repititiveText = 'old text with old words';
const replaceAll = repititiveText.replace(/old/g, 'new')



//---------
//==STRING LASTINDEXOF===
//----------
//Basic usage
const myText = 'apple organe, apple, banana';
const lastIndx = myText.lastIndexOf('apple')

//Specifying the from index
// const result = myText.lastIndexOf('apple',12)


//---------
//==STRING INCLUDES===
//----------

//Basic usage
const myText2 = 'I have an apple';
// const result = myText2.includes('Apple')

//Checking for a character
// const result = myText2.includes('I');

//Specifying specific position
const result = myText2.includes('apple',8);


//---------
//==STRING CONVERSION===
//----------

//Converting a number to a string;
const num = 42;
const strNum= String(num)

//Converting a boolean to a string;
const boolVal = true
const strBool = String(boolVal)

//Converting  an array to a string;

const arr = [1,2,3];
// console.log(typeof String(arr));

//Converting  object to a string;

const obj = {name:'Emma', age:25}
// console.log(typeof String(obj));

//Converting  null and undefined to a string;
const str1Null = String(null)

// console.log(typeof str1Null);

//---------
//==.toString()===
//----------
//Convert number to string

const num1 = 25
const strNum1 = num1.toString()
//console.log( typeof strNum1);

//Convert boolean to string
const boolVal2 = false;

// console.log(typeof boolVal2.toString());

//---------
//==STRING TO NUMBER===
//----------
//Converting Pixel Value to Number with parseInt()
const pixelvalueAsString = '42px';
// const convertedVal = parseInt(pixelvalueAsString)
// console.log( convertedVal+10);

// Example 2: Converting Dimension String to Number with parseFloat()
const dimensionStr = "42.5px"
//  const convertedVal = parseFloat(dimensionStr)


 // Example 3: Converting Age Input to Number using Number()

 const ageInput = "42";
//  const convertedVal = Number(ageInput)

//  console.log( convertedVal + 10);

 // Example 4: Quick Conversion using Unary + Operator
 const scoreStr = '100';
//  const convertedVal = +scoreStr

//  console.log( convertedVal + 200);


//-------
//String to Boolean
//-------
// Example 1: Using Boolean() for Form Validation

const usernameInput = 'Thomas';
// const convertedVal = Boolean(usernameInput)

// console.log(convertedVal);

// Example 2: Using Boolean() with Empty String

const emptyField = "";

//  const convertedVal = Boolean(emptyField)
//  console.log(convertedVal);

 // Example 3: Using Double Negation !! for Quick Conversion

 const emailInput = "emma@gmail.com";
 const convertedVal = !!emailInput

 console.log(convertedVal);