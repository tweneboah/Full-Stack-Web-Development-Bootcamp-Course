//Named function for alert

function showAlert() {
  console.log("Hello");
}

//getting the button element
const alertButtonEl = document.getElementById("alertButton");

//Add addEventListener  to the element
alertButtonEl.addEventListener("click", showAlert);

//Named function for  removing event

function removeAlert() {
  alertButtonEl.removeEventListener("click", showAlert);
}

//getting the remove button element
const removeButtonEl = document.getElementById("removeButton");

removeButtonEl.addEventListener("click", removeAlert);
