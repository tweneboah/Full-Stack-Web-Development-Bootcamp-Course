//Step 1: Select the outer div using its ID
const outerDivEl = document.getElementById("outerDiv");
// console.log(outerDivEl);

//Step 2: Navigate to the first child, which is a text node
const firstChildEl = outerDivEl.childNodes[0];

// Step 3: Navigate to the second child, which is the innerDiv
const innerDivEl = outerDivEl.childNodes[1];

//Step 4: select the first child of the inner div
const innerDivFirstChildEl = innerDivEl.childNodes[0];

//Step 4: select the second child of the inner div
const nestetListEl = innerDivEl.childNodes[1];
console.log(nestetListEl);
