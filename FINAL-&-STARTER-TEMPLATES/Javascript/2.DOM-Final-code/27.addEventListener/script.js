//-----Mouse Event-----

function addEvent() {
  console.log("Click event is called");
}
document.getElementById("clickButton").addEventListener("click", addEvent);

document
  .getElementById("doubleClickButton")
  .addEventListener("dblclick", (e) => {
    console.log(e);
    // console.log("dbClickHandler event is called");
    // console.log(this);
  });

document.getElementById("hoverDiv").addEventListener("mouseover", function () {
  console.log("onMouseOverHandler event is called");
});

document.getElementById("hoverDiv").addEventListener("mouseout", function () {
  console.log("onMouseOutHandler event is called");
});

//-----Keyboard Event-----

document.getElementById("keyInput").addEventListener("keydown", function () {
  console.log("onkeydownHandler event is called");
});

document.getElementById("keyInput").addEventListener("keyup", function () {
  console.log("onkeyupHandler event is called");
});

document.getElementById("keyInput").addEventListener("keypress", function () {
  console.log("onkeypressHandler event is called");
});

//-----Form Events-----

document.getElementById("myForm").addEventListener("submit", function () {
  console.log("onsubmitHandler event is called");
});

document.getElementById("formInput").addEventListener("focus", function () {
  console.log("onfocusHandler event is called");
});

document.getElementById("formInput").addEventListener("blur", function () {
  console.log("onblurHandler event is called");
});
