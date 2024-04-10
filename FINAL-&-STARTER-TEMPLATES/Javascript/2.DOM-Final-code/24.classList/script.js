//select the p element
const p = document.getElementById("textElement");
// p.classList.add("highlight", "bold", "italic");
// p.classList.add("bold");
// p.classList.add("italic");

//function to add class
function addClass() {
  p.classList.add("highlight", "bold", "italic");
}

//removeClass
function removeClass() {
  p.classList.remove("highlight", "bold", "italic");
}

//toggleClass
function toggleClass() {
  p.classList.toggle("italic");
}

//checkContains
function checkContains() {
  alert(
    p.classList.contains("highlight")
      ? "Contains Highlight"
      : "Does not not contain Higlight"
  );
}

//replaceClass

function replaceClass() {
  if (p.classList.contains("italic")) {
    p.classList.replace("italic", "red-text");
  } else {
    p.classList.add("red-text");
  }
}

//listItem

function listItem() {
  alert("The first clas is:" + p.classList.item(0));
}

//getValue
function getValue() {
  console.log(p.classList.value);
}
