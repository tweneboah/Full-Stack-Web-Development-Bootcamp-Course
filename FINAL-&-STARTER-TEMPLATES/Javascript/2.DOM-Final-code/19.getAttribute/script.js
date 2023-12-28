//For this example, let's consider a gallery of images where each image has an associated data attribute called `data-author` that stores the author's name. You want to filter the images by author.

//Get all the images

const imagesEl = document
  .getElementById("imageGallery")
  .querySelectorAll("img");

// Create an array to store images by Alice

let imagesByAlice = [];

//Use getAttribute to filter images by author Alice
imagesEl.forEach((img) => {
  //   console.log(img);
  const author = img.getAttribute("data-author");
  console.log(author);
  if (author === "Alice") {
    imagesByAlice.push(img);
  }
});
imagesByAlice.forEach((img) => console.log(img));

// Hide images that are not by Alice

imagesEl.forEach((img) => {
  if (!imagesByAlice.includes(img)) {
    img.style.display = "none";
  }
});
