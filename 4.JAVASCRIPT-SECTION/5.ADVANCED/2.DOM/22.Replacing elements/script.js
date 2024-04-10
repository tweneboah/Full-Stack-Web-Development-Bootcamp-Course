// Function to replace an article

function replaceArticle(articleId, newContent) {
  // Find the existing article element by its ID

  const existingArticle = document.getElementById(articleId);
  //Create a new div element for the updated article
  const newArticleEl = document.createElement("div");
  //add css to it
  newArticleEl.className = "article";
  // Keep the ID same for the new article
  newArticleEl.id = articleId;
  //Create a text node for the new content
  const newTextNode = document.createTextNode(newContent);
  //Append the text node to the new article div
  newArticleEl.appendChild(newTextNode);
  // Replace the existing article with the new one
  existingArticle.parentNode.replaceChild(newArticleEl, existingArticle);
}

replaceArticle("article1", "Some content");
replaceArticle("article2", "Some content 2");
