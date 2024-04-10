// Add a single event listener to the ul
document.getElementById("itemList").addEventListener("click", function (event) {
  const clickedEl = event.target;
  //Check if the clicked element is a list item
  console.log(clickedEl.tagName);
  if (clickedEl.tagName === "LI") {
    const itemNumer = clickedEl.getAttribute("data-item");
    console.log(`You clicked item ${itemNumer}`);
  }
});
