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
        console.log(this.name, this.author, this.pages);
}

const b1Name =  "2001: a Space Odyssey";
const b1Author = "Arthur C. Clark";
const b1Pages = "296";
const b1Read = "Have Read"
const bookNum = "book0"

const b2Name = "Magic of Recluse";
const b2Author = "L.E. Modesitt, Jr";
const b2Pages = "501";
const b2Read = "Have Read";

const b3Name = "The Eyes Of The Dragon";
const b3Author = "Stephen King";
const b3Pages = "384";
const b3Read = "Have Read";

const b4Name = "The Ruins of Gorlan";
const b4Author = "John Flanagan";
const b4Pages = "288";
const b4Read = "Have Read";

const b5Name = "Wizards First Rule";
const b5Author = "Terry Goodkind";
const b5Pages = "576";
const b5Read = "Have Read";

myLibrary.push(new book(b1Name, b1Author, b1Pages, b1Read, bookNum))
myLibrary.push(new book(b2Name, b2Author, b2Pages, b2Read))
myLibrary.push(new book(b3Name, b3Author, b3Pages, b3Read))
myLibrary.push(new book(b4Name, b4Author, b4Pages, b4Read))
myLibrary.push(new book(b5Name, b5Author, b5Pages, b5Read))

document.getElementById('submit').addEventListener('click', () => addBookToLibrary(addToDisplayBooks));

const bookstitle = document.getElementById("title")

function addBookToLibrary(callback) {
    const name = document.getElementById('name').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;

    myLibrary.push(new book(name, author, pages))

    return callback();
}

function addBookHTML(libraryNum) {
    bookid = myLibrary[libraryNum];
    const newBook = document.createElement("div");
    newBook.className = "books"
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

    const toggleSwitch = document.createElement('label');
    toggleSwitch.className = "switch";
    newBook.appendChild(toggleSwitch);

    const checkBox = document.createElement('input');
    checkBox.className = "checked"
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("id", "book"+libraryNum);
    toggleSwitch.appendChild(checkBox);
    
    const bookId = document.querySelector('#book'+libraryNum)
    bookId.addEventListener('click', myLibrary[libraryNum].haveRead())

    const slider = document.createElement('span');
    slider.className = "slider round";
    toggleSwitch.appendChild(slider);

    //document.querySelector(bookid).addEventListener('change', myLibrary[bookid].haveRead());
    //myLibrary[libraryNum].prototype = Object.create(book.prototype);
    //document.querySelector('#book'+libraryNum).addEventListener('change', myLibrary[libraryNum].haveRead());
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
    let myLibraryEnd = myLibrary.length - 1
    addBookHTML(myLibraryEnd);
}


displayBooks();
//document.querySelector('.checked').addEventListener('change', myLibrary.haveRead());