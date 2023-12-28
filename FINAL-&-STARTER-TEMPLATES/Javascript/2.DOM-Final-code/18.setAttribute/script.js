//Using setAttribute to change product images
const product1ImageEl = document
  .getElementById("product1")
  .querySelector("img");

console.log(product1ImageEl);
product1ImageEl.setAttribute(
  "src",
  "https://cdn.pixabay.com/photo/2017/11/27/21/31/computer-2982270_1280.jpg"
);

product1ImageEl.setAttribute("alt", "my new product");

//Using setAttribute to change product links
const product1LinkEl = document.getElementById("product1").querySelector("a");

product1LinkEl.setAttribute("href", "new.html");

console.log(product1LinkEl);
