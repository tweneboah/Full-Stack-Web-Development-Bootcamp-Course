//Add event listener to the outer div
document.getElementById("outerDiv").addEventListener(
  "click",
  function (event) {
    alert("Outer Div Clicked! Event Phase" + event.eventPhase);
  },
  false
); //Bubbling phase

// Add event listener to the middle div
document.getElementById("middleDiv").addEventListener(
  "click",
  function (event) {
    alert("Middle Div Clicked! Event Phase" + event.eventPhase);
    event.stopPropagation(); //stop the event propagation
  },
  false
); //Bubbling phase

// Add event listener to the innder div
document.getElementById("innerDiv").addEventListener(
  "click",
  function (event) {
    alert("Inner Div Clicked! Event Phase" + event.eventPhase);
    event.stopPropagation(); //stop the event propagation
  },
  false
); //Bubbling phase
