//Accessing Parent Elements

const parentEl = document.getElementById("parent");
//Accessing the grandparent element
const grandparentEl = parentEl.parentNode;

//Accessing Child Elements
const firstChildEl = parentEl.firstChild;
const lastChildEl = parentEl.lastChild;

console.log(lastChildEl);
console.log(firstChildEl);

// Accessing Element Children Only
const firstElmentChild = parentEl.firstElementChild;
const lastElementChild = parentEl.lastElementChild;
console.log(lastElementChild);
console.log(firstElmentChild);
