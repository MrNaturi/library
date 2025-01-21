const myLibrary = ["book", "books", "damn"];
const library = document.getElementById("library")
const newBkBtn = document.getElementById("newbook")
const newForm = document.getElementById("newbookform")
const dialog = document.getElementById("dialog")
const submitBtn = document.getElementById("submitBtn")

function Book(title, author,pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.update = function() {
    myLibrary.push({
      title:  this.title,
      author: this.author,
      pages: this.pages,
      read: this.read,

    })
  }
}

function addBookToLibrary() {

}
newBkBtn.onclick = () => {
    dialog.showModal();
}

submitBtn.onclick = (event) => {
    event.preventDefault();
    dialog.close
}

myLibrary.forEach(el => {
    library.innerText += ` ${el}`
})
