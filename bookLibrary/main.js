//variables from Dom
const modal = document.getElementById("modal");
const form = document.querySelector(".form");
const addBookBtn = document.querySelector(".add-btn");
const submitBtn = document.querySelector(".form-btn");
const checkBoxes = document.querySelectorAll("input[name='book']");
const library = document.querySelector(".cards-grid");

//All of your book objects are stored in myLibrary array
/*
let myLibrary = [{
  "title": "Title 1",
  "author": "Author 1",
  "pages": "111",
  "status1": "Read",
  "id": 1
},{
  "title": "Title 2",
  "author": "Author 2",
  "pages": "22",
  "status1": "Read",
  "id": 2
}];
*/
myLibrary = [new Book('Title2', 'Author 2', '22', 'Read')];

//id counter set point

//book class

form.addEventListener("submit", (e) => {
  e.preventDefault();
  createBook();
});


function displayBooks(){
  let h = '';
  myLibrary.forEach(book => {
    h += book.cardHtml();
  });
  library.innerHTML = h;
}


// //takes user’s input and store the new book objects into an array.
// const addBookToLibrary = (item) => myLibrary.push(item);

// //take all data from form
const createBook = () => {
  let title = 'Title x';// document.querySelector("#title").value;
  let author = 'Author x';// document.querySelector("#author").value;
  let pages = '123';// document.querySelector("#number").value;
  let status1 = 'Read';

  let newBook = new Book(title, author, pages, status1);
  //console.log(newBook);
  myLibrary.push(newBook);

  displayBooks();
};

function editBook(bookId){
  let book = myLibrary.find(x => x.id === bookId);
  document.querySelector("#title").value = book.title;
  document.querySelector("#author").value = book.author;
  document.querySelector("#pages").value = book.pages;
  modal.style.visibility = "visible";
}


function closeModal(){
  document.querySelector("#title").value = '';
  document.querySelector("#author").value = '';
  document.querySelector("#pages").value = '';
  modal.style.visibility = "hidden";
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
//   //console.log(myLibrary[editStatusIndex].status1);
//   if (myLibrary[editStatusIndex].status1 === "Unread") {
//     myLibrary[editStatusIndex].status1 = "Read";
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
