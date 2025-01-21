const myLibrary = ["book", "books", "damn"];
const library = document.getElementById("library")

function Book() {
  // the constructor...
}

function addBookToLibrary() {

}

myLibrary.forEach(el => {
    library.innerText += ` ${el}`
})