//For this example, we will create a simple web page that displays a list of fruits. We will provide a JavaScript function to remove a specific fruit based on its name.

// Function to add a new fruit

function addFruit(name) {
  const ulEl = document.getElementById("fruitList");
  //create li delement
  const li = document.createElement("li");
  li.className = "fruit";
  li.textContent = name;
  ulEl.appendChild(li);
}

addFruit("Apple");
addFruit("Banana");
addFruit("Cherry");
addFruit("Kiwi");
addFruit("Date");
addFruit("Papaya");

//remove fruit function
function removeFruit(name) {
  //firts: select the parent
  const ulEl = document.getElementById("fruitList");
  let fruitFound = false;

  //loop throught the fruits to find the fruit
  for (const li of ulEl.children) {
    if (li.textContent === name) {
      fruitFound = true;
      //remove the fruit
      ulEl.removeChild(li);
      break;
    }
  }
  //Update the message based on whether the fruit was found
  document.getElementById("message").textContent = fruitFound
    ? `${name} was removed from the list`
    : `${name} not found in the list`;
}

removeFruit("Kiwi");
