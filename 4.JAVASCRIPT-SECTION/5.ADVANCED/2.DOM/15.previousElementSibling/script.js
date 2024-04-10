// Select the list element with id "cherry"
const cherryEl = document.getElementById("cherry");
// Select the previous sibling element of "cherry" (should be "banana")

const previousFruitEl = cherryEl.previousElementSibling;

// Select the next sibling element of "cherry" (should be "date")
const nextFruit = cherryEl.nextElementSibling;
console.log(nextFruit);
