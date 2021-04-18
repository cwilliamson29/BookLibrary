let myLibrary = [];

function Book(name, author, pages, read, bookNum) {
    this.name = name;
    this.author = author;
    this.pages = pages
    this.read = read
    this.bookNum = bookNum
        //return { name, author, pages }
}
Book.prototype.haveRead = function() {
    if (this.read === "Have Not Read") {
        this.read = "Have Read";
        bookID = this.bookNum;
        document.getElementById(bookID).textContent = this.read

    } else if (this.read === "Have Read") {
        this.read = "Have Not Read"
        bookID = this.bookNum;
        document.getElementById(bookID).textContent = this.read
    }
}

myLibrary.push(new Book("2001: a Space Odyssey", "Arthur C. Clark", "296", "Have Not Read", "book0"))
myLibrary.push(new Book("Magic of Recluse", "L.E. Modesitt, Jr", "501", "Have Not Read", "book1"))
myLibrary.push(new Book("The Eyes Of The Dragon", "Stephen King", "384", "Have Not Read", "book2"))
myLibrary.push(new Book("The Ruins of Gorlan", "John Flanagan", "288", "Have Not Read", "book3"))
myLibrary.push(new Book("Wizards First Rule", "Terry Goodkind", "576", "Have Not Read", "book4"))

document.getElementById('submit').addEventListener('click', () => addBookToLibrary());

//const bookstitle = document.getElementById("title")

function addBookToLibrary() {
    let Num = myLibrary.length;
    const name = document.getElementById('name').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = "Have Not Read"
    const bookNum = "book" + Num;

    myLibrary.push(new Book(name, author, pages, read, bookNum))

    let myLibraryEnd = myLibrary.length - 1;
    addBookHTML(myLibraryEnd);
}

function addBookHTML(libraryNum) {

    const newBook = document.createElement("div");
    newBook.className = "books"
    newBook.setAttribute("id", "bookCont" + libraryNum);
    container.appendChild(newBook);

    const title = document.createElement('div');
    title.innerHTML = myLibrary[libraryNum].name;
    title.className = "title"
    newBook.appendChild(title);

    const author = document.createElement('div');
    author.innerHTML = "by: " + myLibrary[libraryNum].author;
    author.className = "author"
    newBook.appendChild(author);

    const pages = document.createElement('div');
    pages.innerHTML = "Pages: " + myLibrary[libraryNum].pages;
    pages.className = "pages";
    newBook.appendChild(pages);

    const statusContainer = document.createElement('div');
    statusContainer.className = "statusContainer";
    newBook.appendChild(statusContainer);

    const toggleSwitch = document.createElement('label');
    toggleSwitch.className = "switch";
    statusContainer.appendChild(toggleSwitch);

    const checkBox = document.createElement('input');
    checkBox.className = "checked"
    checkBox.setAttribute("type", "checkbox");
    checkBox.setAttribute("id", "selBook" + libraryNum);
    toggleSwitch.appendChild(checkBox);

    const slider = document.createElement('span');
    slider.className = "slider round";
    toggleSwitch.appendChild(slider);

    const readStatus = document.createElement('div');
    readStatus.className = "readStatus";
    readStatus.setAttribute("id", "book" + libraryNum);
    readStatus.textContent = myLibrary[libraryNum].read;
    statusContainer.appendChild(readStatus);

    const remove = document.createElement('div');
    remove.innerHTML = "REMOVE"
    remove.className = "remove";
    remove.setAttribute("id", "remove" + libraryNum);
    newBook.appendChild(remove);

    const removeBook = document.getElementById("remove" + libraryNum);
    removeBook.addEventListener('click', () => { deleteBook(libraryNum) });

    const selector = document.querySelector('#selBook' + libraryNum);
    selector.addEventListener('change', () => { myLibrary[libraryNum].haveRead() });
}

function deleteBook(num) {
    const book = document.getElementById("bookCont" + num)
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


displayBooks();