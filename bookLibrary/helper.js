let idCounter = 0;
let myLibrary = [];

//generates id for every new book
function generateId() {
    if (myLibrary.length === 0) {
      idCounter = 0;
    }
    idCounter = idCounter + 1;
    return idCounter;
  };