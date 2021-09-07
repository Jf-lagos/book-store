const book1 = new Book ("Hobit", "Moi meme", "640");
const book2 = new Book ("Pere riche", "Kiyosaki", "69");
const book3 = new Book ("Harry Potter", "Rollings", "1000");

let myLibrary = [];

function Book (title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
    }

function addBookToLibrary() {
    boxvalue = document.getElementById('box').value;
    myLibrary.push(boxvalue);
    return false;
  }

  document.querySelector('form button').addEventListener('click', function(event) {

    var inputs = document.querySelectorAll('form input');
    var newActivity = {};
    for (var i = 0; i < inputs.length; i++) {
      newActivity[inputs[i].name] = inputs[i].value;
      inputs[i].value = '';
    }
    myActivities.push(newActivity);
    console.log(myActivities);
    event.preventDefault();
  
  }, false);

console.log(myLibrary)







Book.prototype.newfonc = function () {
    return this.title + "hols"
}


