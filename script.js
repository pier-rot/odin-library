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
}

function toggleBookRead(book) {
  book.read = !book.read;
}