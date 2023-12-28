//-----Mouse Event-----
document.getElementById("clickButton").onclick = function clickHandler() {
  //console.log("Click event is called");
};

document.getElementById("doubleClickButton").ondblclick =
  function dbClickHandler() {
    console.log("dbClickHandler event is called");
  };

document.getElementById("hoverDiv").onmouseover =
  function onMouseOverHandler() {
    console.log("onMouseOverHandler event is called");
  };

document.getElementById("hoverDiv").onmouseout = function onMouseOutHandler() {
  console.log("onMouseOutHandler event is called");
};

//-----Keyboard Event-----

document.getElementById("keyInput").onkeydown = function onkeydownHandler() {
  console.log("onkeydownHandler event is called");
};

document.getElementById("keyInput").onkeyup = function onkeyupHandler() {
  //console.log("onkeyupHandler event is called");
};

document.getElementById("keyInput").onkeypress = function onkeypressHandler() {
  console.log("onkeypressHandler event is called");
};

//-----Form Events-----

document.getElementById("myForm").onsubmit = function onsubmitHandler() {
  console.log("onsubmitHandler event is called");
};

document.getElementById("formInput").onfocus = function onfocusHandler() {
  console.log("onfocusHandler event is called");
};

document.getElementById("formInput").onblur = function onblurHandler() {
  console.log("onblurHandler event is called");
};
