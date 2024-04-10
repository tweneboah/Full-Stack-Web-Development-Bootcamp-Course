//Access the button element
const buttonEl = document.getElementById("actionButton");
//single click
buttonEl.addEventListener("click", function () {
  console.log("Btn was clicked");
});

//docuble click
buttonEl.addEventListener("dblclick", function () {
  console.log("Btn was double clicked");
});

//Mouse enter
buttonEl.addEventListener("mouseenter", function () {
  console.log("mouseenter");
});

//Mouse leave
buttonEl.addEventListener("mouseleave", function () {
  console.log("mouseleave");
});
