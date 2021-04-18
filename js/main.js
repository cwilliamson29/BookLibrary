let myLibrary = [];

function book(name, author, pages, read, bookNum) {
    this.name = name;
    this.author = author;
    this.pages = pages
    this.read = read
    this.bookNum = bookNum
    //return { name, author, pages }
}
book.prototype.haveRead = function(){
    if(this.read === "Have Not Read"){
        this.read = "Have Read";
        bookID = this.bookNum;
        document.getElementById(bookID).textContent = this.read
        
    }else if(this.read === "Have Read"){
        this.read = "Have Not Read"
        bookID = this.bookNum;
        document.getElementById(bookID).textContent = this.read
    }
}

const b1Name =  "2001: a Space Odyssey";
const b1Author = "Arthur C. Clark";
const b1Pages = "296";
const b1Read = "Have Not Read"
const b1bookNum = "book0";

const b2Name = "Magic of Recluse";
const b2Author = "L.E. Modesitt, Jr";
const b2Pages = "501";
const b2Read = "Have Not Read";
const b2bookNum = "book1";

const b3Name = "The Eyes Of The Dragon";
const b3Author = "Stephen King";
const b3Pages = "384";
const b3Read = "Have Not Read";
const b3bookNum = "book2";

const b4Name = "The Ruins of Gorlan";
const b4Author = "John Flanagan";
const b4Pages = "288";
const b4Read = "Have Not Read";
const b4bookNum = "book3";

const b5Name = "Wizards First Rule";
const b5Author = "Terry Goodkind";
const b5Pages = "576";
const b5Read = "Have Not Read";
const b5bookNum = "book4";

myLibrary.push(new book(b1Name, b1Author, b1Pages, b1Read, b1bookNum))
myLibrary.push(new book(b2Name, b2Author, b2Pages, b2Read, b2bookNum))
myLibrary.push(new book(b3Name, b3Author, b3Pages, b3Read, b3bookNum))
myLibrary.push(new book(b4Name, b4Author, b4Pages, b4Read, b4bookNum))
myLibrary.push(new book(b5Name, b5Author, b5Pages, b5Read, b5bookNum))

document.getElementById('submit').addEventListener('click', () => addBookToLibrary(addToDisplayBooks));

//const bookstitle = document.getElementById("title")

function addBookToLibrary(callback) {
    let Num = myLibrary.length;
    const name = document.getElementById('name').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = "Have Not Read"
    const bookNum = "book"+Num;

    myLibrary.push(new book(name, author, pages, read, bookNum))

    return callback();
}

function addBookHTML(libraryNum) {
    bookid = myLibrary[libraryNum];
    const newBook = document.createElement("div");
    newBook.className = "books"
    newBook.setAttribute("id", "bookCont"+libraryNum);
    container.appendChild(newBook);

    const Title = document.createElement('div');
    Title.innerHTML = myLibrary[libraryNum].name;
    Title.className = "title"
    newBook.appendChild(Title);

    const Author = document.createElement('div');
    Author.innerHTML = "by: " + myLibrary[libraryNum].author;
    Author.className = "author"
    newBook.appendChild(Author);

    const Pages = document.createElement('div');
    Pages.innerHTML = "Pages: " + myLibrary[libraryNum].pages;
    Pages.className = "pages";
    newBook.appendChild(Pages);

    const statusContainer = document.createElement('div');
    statusContainer.className = "statusContainer";
    newBook.appendChild(statusContainer);

    const toggleSwitch = document.createElement('label');
    toggleSwitch.className = "switch";
    statusContainer.appendChild(toggleSwitch);

    const checkBox = document.createElement('input');
    checkBox.className = "checked"
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("id", "selBook"+libraryNum);
    toggleSwitch.appendChild(checkBox);

    const slider = document.createElement('span');
    slider.className = "slider round";
    toggleSwitch.appendChild(slider);

    const readStatus = document.createElement('div');
    readStatus.className = "readStatus";
    readStatus.setAttribute("id", "book"+libraryNum);
    readStatus.textContent = myLibrary[libraryNum].read;
    statusContainer.appendChild(readStatus);

    const remove = document.createElement('div');
    remove.innerHTML = "REMOVE"
    remove.className = "remove";
    remove.setAttribute("id", "remove"+libraryNum);
    newBook.appendChild(remove);

    const removeBook = document.getElementById("remove"+libraryNum);
    removeBook.addEventListener('click', () => {deleteBook(libraryNum)});

    const selector = document.querySelector('#selBook'+libraryNum);
    selector.addEventListener('change', () => {myLibrary[libraryNum].haveRead()});
}

function deleteBook(num){
    const book = document.getElementById("bookCont"+num)
    book.remove()
    delete myLibrary[num];
}

function displayBooks() {
    let container = document.createElement('div');
    container.id = 'container';
    document.body.appendChild(container);

    for (let i = 0; i < myLibrary.length;) {
        addBookHTML(i);
        ++i
    }
}
function addToDisplayBooks() {
    let myLibraryEnd = myLibrary.length - 1;
    addBookHTML(myLibraryEnd);
}


displayBooks();