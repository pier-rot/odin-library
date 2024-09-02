const myLibrary = [];

function Book(title, author, pages, edition, year, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.edition = edition;
  this.year = year;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  // Update HTML
}

function toggleBookRead(book) {
  book.read = !book.read;
}

function showPopUp (id) {
  const popup = document.getElementById(id);
  popup.classList.toggle("show");
}

// Returns HTML Node/card from book
function makeCardFromBook (book) {
  const bookContainer = document.createElement("div");
  bookContainer.setAttribute("class", "book-container");
  const bookDiv = document.createElement("div");
  bookDiv.setAttribute("class", "book");
  const buttonsDiv = document.createElement("div");
  
  for(const [key, value] of Object.entries(book)){
    const p = document.createElement("p");
    p.setAttribute("class", `${key}`);
    p.innerText = `${value}`;
    bookDiv.appendChild(p);
    bookDiv.dataset[key] = value;
  }

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("id", "deleteBtn");
  deleteBtn.setAttribute("type", "button");
  deleteBtn.innerText = "󰛌";
  
  const editBtn = document.createElement("button");
  editBtn.setAttribute("id", "editBtn");
  editBtn.setAttribute("type", "button");
  editBtn.innerText = "󰏫";

  buttonsDiv.appendChild(deleteBtn);
  buttonsDiv.appendChild(editBtn);

  bookContainer.appendChild(bookDiv);
  bookContainer.appendChild(buttonsDiv);

  return bookContainer;
}

const lotr1 = new Book("The Fellowship of the Ring", "J.R.R. Tolkien", 423, 1,1954, false);
