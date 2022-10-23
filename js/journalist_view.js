const url = "http://localhost:3000/articles";
const sideColumn = document.querySelector(".side-column__cards");
const mainColumn = document.querySelector(".main-column");

const getData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

/**
 * Function map the array and create a card for each item (article)
 * @param {*} arr
 */
async function createCard(arr) {
  const localArray = await arr;
  localArray.map((item) => {
    const cardItem = document.createElement("div");
    cardItem.classList.add("card-news");

    cardItem.onclick = function () {
      openArticle(item);
    };

    const cardTitle = document.createElement("p");
    cardTitle.textContent = item.title;

    const cardAuthor = document.createElement("p");
    cardAuthor.textContent = item.author;

    cardItem.appendChild(cardTitle);
    cardItem.appendChild(cardAuthor);

    sideColumn.appendChild(cardItem);
  });
}

/**
 * Function gets the item that was clicked (card) and present on the big screen
 * @param {*} item
 */
const openArticle = (item) => {
  const mainColumn = document.querySelector(".main-column");
  mainColumn.innerHTML = "";

  const article = document.createElement("article");

  const btnDelete = document.createElement("button");
  btnDelete.classList.add("btn-delete");
  btnDelete.textContent = "Delete article";
  btnDelete.onclick = function () {
    deleteArticle(item);
  };

  const btnEdit = document.createElement("button");
  btnEdit.classList.add("btn-edit");
  btnEdit.textContent = "Edit content";
  btnEdit.onclick = function () {
    editArticle(item);
  };

  const title = document.createElement("h1");
  title.textContent = item.title;
  title.classList.add("title");

  const description = document.createElement("h2");
  description.textContent = item.description;
  description.classList.add("description");

  const author = document.createElement("h3");
  author.textContent = item.author;
  author.classList.add("author");

  const thumbnail = document.createElement("img");
  thumbnail.src = item.thumbnail;

  const content = document.createElement("p");
  content.textContent = item.content;
  content.classList.add("content");

  mainColumn.appendChild(btnDelete);
  mainColumn.appendChild(btnEdit);
  mainColumn.appendChild(article);
  article.appendChild(title);
  article.appendChild(description);
  article.appendChild(author);
  article.appendChild(thumbnail);
  article.appendChild(content);
};

//This function will need to get the id from the article and change the main column into an editable input
function editArticle(item) {
  const id = item.id;
  console.log(id);
}

//This function will need to receive the id from the article and delete the whole object from the db
function deleteArticle(item) {
  const id = item.id;
  console.log(id);
  /*  const deleteUrl = `url/${id}`;
  fetch(deleteUrl, {
    method: "DELETE",
  }).then((res) => {
    if (!res.ok) {
      console.log("Failed to delete");
    }
    mainColumn.textContent = "Article was deleted";
  }); */
}

createCard(getData(url));
window.onload = getData(url);
