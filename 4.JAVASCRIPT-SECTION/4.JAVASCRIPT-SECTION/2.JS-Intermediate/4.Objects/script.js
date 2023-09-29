//---
//Creating Object using Object Literals
//---

// Define an object to represent a book in a bookstore

// const book = {
//     title:'Harry potter',
//     author:'J.K Rowling',
//     available:true,
//     price:9.99
// }
//---
//Access object properties using the dot notation
//---

// const bookTitle = book.title
// console.log(book.author);
// console.log(book.price);
// console.log(book.available);
// console.log(book.title);


//title
//author
//price
//availiable
//pages

//---
//Accessing Object Properties Using Bracket Notation
//--

const book = {
    title:'Harry potter',
    author:'J.K Rowling',
    available:true,
    price:9.99
}

const bookTitle = book["title"]
// console.log(book['available']);
// console.log(book['price']);
// console.log(book['author']);


//Properties with Special Characters
const person = {
    'first name':'Ben',
    'last name':'Joe'
}

// console.log(person['first name']);
// console.log(person['last name']);

// Using Expressions

const task = {
    description:'Finish homework',
    isCompleted:false
}

const query = 'isCom' + 'pleted'
// console.log(task[query]);

//---
//Adding Properties to objects
//---

//Add user role

const userProfile = {
    username:'Masynctech',
    email:'masunctech@gmail.com',
    // portfolio: {
    //     work1:'Landing page',
    //     work2:'Web App'
    // }
}
//add role property

// userProfile.role = 'admin';
userProfile['role'] = 'superAdmin'

// Adding Properties with Special Characters
const book1 = {
    title:'Harry potter',
}

book1['publication year'] = 2025;

//Adding Nested Properties

const employee = {
    name:'Bob',
    department:'HR'
}
//add address
employee.address = {
    city:'Kumasi',
    state:'Ghana'
}
// console.log(employee.address.state);

//--
//Deleting Properties from objects
//--

// Deleting User Credentials
// const user = {
//     username:'masynctech',
//     password:'12345',
//     gender:'male'
// }

//delete password field
// console.log(user);
// delete user.password
// delete user['gender']
// console.log(user);

//Deleting a Nested Property

// const student ={
//     name:'Thomas',
//     score:{
//         math:90,
//         science:99
//     }
// }

// console.log(student);

// //remove science score
// delete student.score.science
// console.log(student);

//--
//Updating Object Properties
//--

const user = {
    username:'masynctech',
    password:'12345',
    gender:'male',
    location:'New York',
    plan:'starter',
    postCount:1
}

//update the user plan


// if(user.postCount >= 10){
//     user.plan ='Premium'
// }else{
//     user.plan = 'Basic'
// }


if(user.postCount >= 10){
    user['plan'] ='Premium'
}else{
    user['plan'] = 'Basic'
}

// console.log(user);

//--
//Looping Through Objects using for...in Loop
//--

const student ={
   name:'Thomas',
   age:20,
   grade:'A'
}

for(const objeckKey in student){
    // console.log(objeckKey);
   if(student.hasOwnProperty(objeckKey)){
   // console.log(`${objeckKey}: ${student[objeckKey]}`);
   }
}

//Loop to Create a New Object
const numbers = {
    one:1,
    two:2,
    three:3
}
const doubledNumbers = {}

for(const key in numbers){
    if(numbers.hasOwnProperty(key)){
        doubledNumbers[key] = numbers[key] * 2
    }
}

//Loop Through Nested Objects
const school = {
    name:'Maynsynctech School',
    students:{
        course1:'Javascript',
        course2:'Node JS'
    }
}

// for(const key in school){
//     if(typeof school[key] ==='object'){
//         for(const subKey in school[key]){
//             console.log(`${subKey}:${school[key][subKey]}`);
//         }
//     }else{
//         console.log(`${key}: ${school[key]}`);
//     }
// }

// Loop to Filter Object Properties
const scores = {
    math:90,
    science:85,
    literature:92
}

const passedSub ={}

for(const subject in  scores){
    if(scores[subject] >= 90){
        passedSub[subject] = scores[subject]
    }
}

// console.log(passedSub);

//--
//Looping Through Objects using Object.keys()
//--
const person1 = {
    name:'Alice',
    age: 30,
    occupation:'Engineer'
}

const keysArr = Object.keys(person1)

//using foreach to loop
keysArr.forEach(function(key){
    //console.log(`${key}: ${person1[key]}`);
})

//Filtering Object Properties
const scores1 = {
    math:90,
    science:85,
    literature:90,
    programming:100

}

// const highScores = Object.keys(scores1)

// const allHighScores = highScores.filter(function(key){
//     return scores1[key] >= 85
// })
// //sum up all scores
// const highestScore = allHighScores.reduce(function(obj, key){
//     return obj[key] = scores1[key]
// },{})
// console.log(highestScore);

//Use chaining

const highestScore = Object.keys(scores1).filter(function(key){
    return scores1[key] >= 85
}).reduce(function(obj, key){
    return obj[key] = scores1[key]
},{})


//Modifying Object Properties

const prices = {
    apple:1,
    banana:0.5,
    orange:0.8
}
const dicountedPrices = Object.keys(prices).map(function(key){
    return {
        [key]: prices[key] * 0.9
    }
}).reduce(function(acc, curr){
    return Object.assign(acc, curr)
},{})

// console.log(dicountedPrices);

//---
//Looping Through Objects using Object.values()
//--

const person2 = {
    name:'Alice',
    age: 30,
    occupation:'Engineer'
}

const values = Object.values(person2)

values.forEach(function(val){
    //console.log(val);
})

//Calculating Sum of Values
const numbers1 = {
    a:10,
    b:2,
    c:3
}

const numValues = Object.values(numbers1)

const total= numValues.reduce(function(acc, val){
        return acc + val
},0)

// console.log(total);

//---
//Looping Through Objects using Object.entries()
//--

const person3 = {
    name:'Alice',
    age: 30,
    occupation:'Engineer'
}
const entries = Object.entries(person3)

entries.forEach(function([key, value]){
       console.log(key);
       console.log(value);
       console.log(`${key}:${value}`);
})