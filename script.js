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
  const library = document.getElementById("library");
  const addContainer = document.getElementById("add-container");
  const bookCard = makeCardFromBook(book);
  library.insertBefore(bookCard, addContainer);
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
  buttonsDiv.setAttribute("id", "buttons-container");
  for(const [key, value] of Object.entries(book)){
    const p = document.createElement("p");
    p.setAttribute("class", `${key}`);
    p.innerText = makeStringFromKeyValue(key, value);
    bookDiv.appendChild(p);
    bookDiv.dataset[key] = value;
  }

  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("id", "deleteBtn");
  deleteBtn.setAttribute("type", "button");
  deleteBtn.innerText = "󰛌";
  deleteBtn.addEventListener("click", deleteBtnEventHandler);
  
  const editBtn = document.createElement("button");
  editBtn.setAttribute("id", "editBtn");
  editBtn.setAttribute("type", "button");
  editBtn.innerText = "󰏫";
  editBtn.addEventListener("click",editBtnClickHandler);

  buttonsDiv.appendChild(deleteBtn);
  buttonsDiv.appendChild(editBtn);

  bookContainer.appendChild(bookDiv);
  bookContainer.appendChild(buttonsDiv);

  return bookContainer;
}

function makeStringFromKeyValue (key, value) {
  if (key == "author") {
    return "By " + value;
  } else if (key == "year") {
    return "Published in " + value;
  } else if (key == "read") {
    return value ? "Already read" : "Not read yet";
  } else if (key == "pages") {
    return value + " pages";
  } else if (key == "edition") {
    if (value % 10 == 1) {
      return value + "st. Edition";
    } else if (value % 10 == 2) {
      return value + "nd. Edition";
    } else if (value % 10 == 3) {
      return value + "rd. Edition";
    } else {
      return value + "th. Edition";
    }
  } else {
    return value;
  }
}

function deleteNodeFromLibrary(node) {
  const library = document.getElementById("library");
  library.removeChild(node);
}

function deleteBookFromLibrary(book) {
  for(let i = 0; i < myLibrary.length; i++) {
    const curr = myLibrary[i];
    if (book.author == curr.author && book.title == curr.title && book.read == String(curr.read) && book.year == curr.year && book.edition == curr.edition && book.pages == curr.pages) {
      console.log(`Deleting ${curr.title}`);
      myLibrary.splice(i,1);
      break;
    }
  }
}

function submitNewBook(event) {
  event.preventDefault();
  const form = event.currentTarget.parentElement.parentElement;
  const formData = new FormData(form);

  const author = String(formData.get("author"));
  const title = String(formData.get("title"));
  const year = String(formData.get("year"));
  const edition = String(formData.get("edition"));
  const pages = String(formData.get("pages"));
  const read = String((formData.get("read") == "on") ? true : false);

  const book = new Book(title,author,pages,edition,year,read);
  addBookToLibrary(book);
  
}

function deleteBtnEventHandler (event) {
  const targetContainer = event.currentTarget.parentElement.parentElement;
  
  const targetBookElement = targetContainer.firstChild;
  const set = targetBookElement.dataset;

  const targetBook = new Book(set.title, set.author, set.pages, set.edition, set.year, set.read);
  
  deleteNodeFromLibrary(targetContainer);
  deleteBookFromLibrary(targetBook);

}

function editBtnClickHandler (event) {

}

const lotr1 = new Book("The Fellowship of the Ring", "J.R.R. Tolkien", 423, 1,1954, false);
const lotr2 = new Book("The Two Towers", "J.R.R. Tolkien", 352, 1, 1954,false);
const lotr3 = new Book("The Return of the King", "J.R.R. Tolkien", 416,1,1954,false);
const lotr12 = new Book("The Fellowship of the Ring", "J.R.R. Tolkien", 423, 1,1954, false);
addBookToLibrary(lotr1);
addBookToLibrary(lotr2);
addBookToLibrary(lotr3);