//Get the container element

const containerEl = document.getElementById("container");

// Get all buttons within the container

const buttonsEl = document.querySelectorAll("button");

// console.log(buttonsEl);

// Loop through each button and change the text of its next sibling

buttonsEl.forEach((button) => {
  const nextElementEl = button.nextSibling;
  // Check if the next sibling is an element node
  console.log(nextElementEl);
  if (nextElementEl && nextElementEl.nodeType === 3) {
    nextElementEl.textContent = "Changed Text";
  }
});
