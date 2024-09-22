let calcBtn = document.getElementById("calculateBtn");
calcBtn.addEventListener("click", function () {
  //Select the elements
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let resultEl = document.getElementById("result");
  let operator = document.getElementById("operator").value;

  let result;
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    result = num1 / num2;
  } else {
    result = "Error: Division by zero";
  }

  resultEl.innerHTML = result;
});
