document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("h1");
  header.addEventListener("click", () => {
    header.style.color = "yellow";
  });
});
