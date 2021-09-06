


function Book (title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
    this.info = function() {
        return this.title + " by " + this.author + " contain " + this.pages;
    }
}
const hobit = new Book ("Hobit", "Moi meme", "640")

Book.prototype.newfonc = function () {
    return this.title + "hols"
}

document.getElementById("book").innerHTML = hobit.newfonc();
console.log(hobit.info())

let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}