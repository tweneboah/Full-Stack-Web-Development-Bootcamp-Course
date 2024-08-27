//Make sure the elements are loaded

document.addEventListener("DOMContentLoaded", () => {
  //Select elements
  const counterValue = document.getElementById("counter-value");
  const increaseBtn = document.getElementById("increase-btn");
  const decreaseBtn = document.getElementById("decrease-btn");
  const resetBtn = document.getElementById("reset-btn");

  //Global value
  let count = localStorage.getItem("count")
    ? parseInt(localStorage.getItem("count"))
    : 0;

  updateCounter();
  //add events to the buttons
  increaseBtn.addEventListener("click", () => {
    count++;
    //update the counter value
    // counterValue.textContent = count;
    updateCounter();
  });
  decreaseBtn.addEventListener("click", () => {
    count--;
    //update the counter value
    // counterValue.textContent = count;
    updateCounter();
  });
  resetBtn.addEventListener("click", () => {
    count = 0;
    //update the counter value
    // counterValue.textContent = count;
    updateCounter();
  });

  //update counter fn

  function updateCounter() {
    counterValue.textContent = count;
    localStorage.setItem("count", count);
  }
});
