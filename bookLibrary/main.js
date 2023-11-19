
// I am not a very big fan of this, but since we are using just one button, then this will do.
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // remember, this value comes as string! Consider parsing to Int or use "==" instead.
  let bookId = document.querySelector("#id").value; 
  if(bookId){
    updateBook(bookId);
  }
  else{
    createBook();
  }
});

function displayBooks(){
  let h = '';
  myLibrary.forEach(book => {
    h += book.cardHtml();
  });
  library.innerHTML = h;
}

const createBook = () => {
  let title = document.querySelector("#title").value;// document.querySelector("#title").value;
  let author = document.querySelector("#author").value;// document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;// document.querySelector("#number").value;
  let status = getCheckBoxValues('status');

  let newBook = new Book(title, author, pages, status);

  myLibrary.push(newBook);
  closeModal();
  formReset();
  displayBooks();
};

function updateBook(bookId){
  let book = myLibrary.find(x => x.id == bookId); // must use == instead of === because we save as number, but search as string.
  if(book){
    book.title = document.querySelector("#title").value;
    book.author = document.querySelector("#author").value;
    book.pages = document.querySelector("#pages").value;
    book.status = getCheckBoxValues('status');getCheckBoxValues
  }
  closeModal();
  formReset();
  displayBooks();
}

const removeBook = (bookId) => {
  const indexOfObject = myLibrary.findIndex(book => {
    return book.id == bookId;
  });
  myLibrary.splice(indexOfObject, 1);
  console.log(myLibrary);
  formReset();
  displayBooks();
};

const toggleStatus = (bookId) => {
  let book = myLibrary.find((book) => book.id == bookId);

  // I always like to check if object is truely found, before I do something with it.
  if(book){
    book.status = (book.status == 'read')? 'unread' : 'read';
  }
  displayBooks();
} 









// //remove book from the library with delete button
// const removeBook = (cardId) => {
//   let bookId = myLibrary.findIndex((book) => book.id === cardId);
//   myLibrary.splice(bookId, 1);
//   //console.log(myLibrary);
//   displayBook();
// };

// const deleteButtonClicked = () => {
//   const deleteButtons = document.querySelectorAll(".remove");
//   for (const deleteBtn of deleteButtons) {
//     let cardId = parseInt(deleteBtn.parentElement.getAttribute("id"));

//     deleteBtn.addEventListener("click", () => {
//       removeBook(cardId);
//     });
//   }
// };
// //change book status from unread to read
// const editBookStatus = (cardId) => {
//   const editStatusIndex = myLibrary.findIndex((book) => book.id === cardId);
//   //console.log(myLibrary[editStatusIndex].status);
//   if (myLibrary[editStatusIndex].status === "Unread") {
//     myLibrary[editStatusIndex].status = "Read";
//     displayBook();
//   }
// };

// const editButtonClicked = () => {
//   const editButtons = document.querySelectorAll(".change");
//   for (const editBtn of editButtons) {
//     let cardId = parseInt(editBtn.parentElement.getAttribute("id"));
//     //console.log(cardId);
//     editBtn.addEventListener("click", () => {
//       editBookStatus(cardId);
//     });
//   }
// };
