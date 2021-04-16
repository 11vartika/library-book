console.log("This is my index.js");

function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;

}


function Display() {

}

Display.prototype.add = function (book) {
    console.log("Adding to UI");
    tableBody = document.getElementById('tableBody');
    let uiString = `<tr>

        				<td>${book.name}</td>
        				<td>${book.author}</td>
        				<td>${book.type}</td>
       				</tr>`;

    tableBody.innerHTML += uiString;


}

// implementing the clear function
Display.prototype.clear = function (book) {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

// implementing the validate function
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false
    }
    else {
        return true;
    }
}

Display.prototype.show = function (type, displaymessage) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert - ${type} alert-dismissible fade show" role="alert">
                            <strong>Message !</strong> ${displaymessage}
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                         </div>`


}

// add submit event listener to libraryform

let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {

    console.log('You have submitted the form');

    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;

    // fiction , datastructure , programming 


    let fiction = document.getElementById('fiction');
    let datastructure = document.getElementById('datastructure');
    let programming = document.getElementById('programming');
    let type;

    if (fiction.checked) {
        type = fiction.value;

    }

    else if (datastructure.checked) {
        type = datastructure.value;
    }

    else if (programming.checked) {
        type = programming.value;
    }
    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();
    if (display.validate(book)) {

        display.add(book);

        display.clear();

        display.show('success', 'Your book has been successfully added')


    }
    else {
        // show error to the user

        display.show('danger', 'Sory you cannot add this book');

    }
    e.preventDefault();


}