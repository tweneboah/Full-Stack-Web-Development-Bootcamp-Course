//Step 1: Select a list item using data attribute
const selectedItemEl = document.querySelector('[data-item="fruit"]');

// Step 2: Navigate to the parent <ul> element
const parentListEl = selectedItemEl.parentNode;

// Step 3: Navigate to grandparent
const grandparentParentEl = parentListEl.parentNode;

// Step 4: Navigate to great- grandparent
const greatGrandParentEl = grandparentParentEl.parentNode;
console.log(greatGrandParentEl);
