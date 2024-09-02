// Task 3 - Library ( Bonus )
// Create a TypeScript program that simulates a basic library management system.
// The system should allow users to:
// ● Add books(title, author).
// ● Remove books.
// ● Display all books in the library.
// Book Object: Define an interface or class to represent a book.This should include properties like id, title, author
// Library Class: Create a class to represent the library itself.This class should contain a collection of books and
// should contain all the functionality for adding, removing and getting all the books in the library class
var bookNameinput = document.querySelector('input[name=bookName]');
var authorNameinput = document.querySelector('input[name=authorName]');
var submitInput = document.querySelector('input[type=submit]');
var bookprice = document.querySelector('input[type=number]');
var currentBooksDiv = document.getElementById("currenBook");
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
        this.getFromLocalStroage();
        this.renderBooks();
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
        // console.log(this.books);
        this.renderBooks();
        localStorage.setItem("books", JSON.stringify(this.books));
    };
    Library.prototype.getFromLocalStroage = function () {
        var stored = localStorage.getItem("books");
        if (stored) {
            this.books = JSON.parse(stored);
        }
    };
    Library.prototype.remove = function (id) {
        this.books = this.books.filter(function (book) { return book.id !== id; });
        localStorage.setItem("books", JSON.stringify(this.books));
        this.renderBooks();
    };
    Library.prototype.renderBooks = function () {
        var currentBooksDiv = document.getElementById("currenBook");
        currentBooksDiv.innerHTML = '';
        this.books.forEach(function (book) {
            var bookDiv = document.createElement('div');
            bookDiv.className = 'book';
            bookDiv.innerHTML = "\n        <p>".concat(book.name, "</p>\n        <p>").concat(book.author, "</p>\n        <p>").concat(book.price, " $</p>\n        <button onclick=\"library.remove(").concat(book.id, ")\">Remove</button>\n      ");
            currentBooksDiv.appendChild(bookDiv);
        });
    };
    return Library;
}());
var Book = /** @class */ (function () {
    function Book(name, author, price) {
        this.id = Date.now();
        this.name = name;
        this.author = author;
        this.price = price;
    }
    return Book;
}());
var library = new Library();
submitInput.addEventListener("click", function (e) {
    e.preventDefault();
    if (bookNameinput.value && authorNameinput.value && bookprice.value) {
        var book = new Book(bookNameinput.value, authorNameinput.value, +bookprice.value);
        library.addBook(book);
        bookNameinput.value = '';
        authorNameinput.value = '';
        bookprice.value = '';
    }
});
library.renderBooks();
