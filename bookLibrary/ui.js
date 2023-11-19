const modal = document.getElementById("modal");
const form = document.querySelector(".form");
const addBookBtn = document.querySelector(".add-btn");
const submitBtn = document.querySelector(".form-btn");
const checkBoxes = document.querySelectorAll("input[name='book']");
const library = document.querySelector(".cards-grid");

function getCheckBoxValues(inputName){
    let values = [];
    let chkBoxes = document.getElementsByName(inputName);
    chkBoxes.forEach((cb) => {
        if (cb.checked) {
            values.push(cb.value);
        }
    });
    return values.join();
}

function setCheckBoxValues(inputName, newValue){
    let values = newValue.split(',');
    let chkBoxes = document.getElementsByName(inputName);
    chkBoxes.forEach((cb) => {
        if(values.includes(cb.value)){
            cb.checked = true;
        }
    });
}

function closeModal(){
    form.reset();
    modal.style.visibility = "hidden";
}

function openEditDialog(bookId){
let book = myLibrary.find(x => x.id === bookId);
document.querySelector("#id").value = book.id;
document.querySelector("#title").value = book.title;
document.querySelector("#author").value = book.author;
document.querySelector("#pages").value = book.pages;
setCheckBoxValues("status", book.status);
modal.style.visibility = "visible";
}

addBookBtn.addEventListener("click", () => {
    form.reset();
    modal.style.visibility = "visible";
});
  
