const library = document.getElementById("library")
const newBkBtn = document.getElementById("newbook")
const newForm = document.getElementById("newbookform")
const dialog = document.getElementById("dialog")
const submitBtn = document.getElementById("submitBtn")
const selectEl = dialog.querySelector("select")
const author = document.getElementById("author")
const title = document.getElementById("Title")
const pagenumber = document.getElementById("pagenumber")


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
    library.innerHTML= ""
    myLibrary.forEach((el, index) => {
        const bookDiv = document.createElement("div");
        bookDiv.dataset.bookIndex = index;  
        bookDiv.innerHTML = `
            <h1>${el.title}</h1>
            <p>${el.author}</p>
            <p>${el.pages}</p>
            <button class="toggleRead">${el.read}</button>
        `;
        library.appendChild(bookDiv);
    });
    document.querySelectorAll(".toggleRead").forEach(button => {
        const bookDiv = button.parentElement;
        const bookIndex = bookDiv.dataset.bookIndex;
        button.onclick = () => {
            if (button.innerText === "Read") {
                button.innerText = "Not Read";
                myLibrary[bookIndex].read = "Not read"
            } else {
                button.innerText = "Read";
                 myLibrary[bookIndex].read = "Read"
            }
        };
    });
} 


newBkBtn.onclick = () => {
    dialog.showModal();
}

submitBtn.onclick = (event) => {
    event.preventDefault();
    const formData = [
        title.value,
        author.value,
        pagenumber.value,
        selectEl.value,
    ];
    const serializedData = JSON.stringify(formData);
    dialog.close(serializedData);
}

dialog.addEventListener("close", () => {
    const resultArray = JSON.parse(dialog.returnValue);
   const newBook = new Book(resultArray[0], resultArray[1], resultArray[2], resultArray[3]) 
   newBook.update();
   addLibrary();
});

addLibrary();
