const myLibrary = [{
    title: "Sufficiently Advanced Magic",
    author: "Andrew Rowe",
    pages: "478",
    read: "Read",
},
{
    title: "On the shoulders of Titan",
    author: "Andrew Rowe",
    pages: "478",
    read: "Read",
}, 
];
const library = document.getElementById("library")
const newBkBtn = document.getElementById("newbook")
const newForm = document.getElementById("newbookform")
const dialog = document.getElementById("dialog")
const submitBtn = document.getElementById("submitBtn")
const selectEl = dialog.querySelector("select")
const author = document.getElementById("author")
const title = document.getElementById("Title")
const pagenumber = document.getElementById("pagenumber")

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

function addLibrary (){
    myLibrary.forEach(el => {
        library.innerHTML += `<div>
        <h1>${el.title}</h1>
        <p>${el.author}</p>
        <p>${el.pages}</p>
        <btn class="toggleRead">${el.read}</btn>
    </div>`
    })
} 



newBkBtn.onclick = () => {
    dialog.showModal();
}

submitBtn.onclick = (event) => {
    event.preventDefault();
    const formData = [
        author.value,
        title.value,
        pagenumber.value,
        selectEl.value,
    ];
    const serializedData = JSON.stringify(formData);
    dialog.close(serializedData);
}

dialog.addEventListener("close", () => {
    const resultArray = JSON.parse(dialog.returnValue);
   const newBook = new Book(resultArray[0], resultArray[1], resultArray[2], resultArray[3]) 
   newBook.update()
   library.innerHTML = ""
   addLibrary()
});

addLibrary()
