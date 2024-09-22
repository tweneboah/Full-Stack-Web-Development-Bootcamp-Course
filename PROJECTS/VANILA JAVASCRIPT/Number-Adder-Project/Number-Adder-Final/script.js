let addButton = document.getElementById("addButton");
//add event
addButton.addEventListener("click", function () {
  //1.Select the elements
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;

  let result = document.getElementById("result");

  //perform calc
  let sum = parseFloat(num1) + parseFloat(num2);

  result.innerHTML = '<i class="fas fa-equals icon"></i>' + sum;
});
