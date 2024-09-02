// Task 3 - Library ( Bonus )
// Create a TypeScript program that simulates a basic library management system.
// The system should allow users to:
// ● Add books(title, author).
// ● Remove books.
// ● Display all books in the library.
// Book Object: Define an interface or class to represent a book.This should include properties like id, title, author
// Library Class: Create a class to represent the library itself.This class should contain a collection of books and
// should contain all the functionality for adding, removing and getting all the books in the library class

let bookNameinput = document.querySelector('input[name=bookName]') as HTMLInputElement
let authorNameinput = document.querySelector('input[name=authorName]') as HTMLInputElement
let submitInput = document.querySelector('input[type=submit]') as HTMLInputElement

let currentBooksDiv = document.getElementById("currenBook") as HTMLDivElement

interface Book {
  id: number;
  name: string;
  author: string;
}
class Library {
  private books: Book[] = []
  constructor() {
    this.getFromLocalStroage()
    this.renderBooks()
  }

  addBook(book: Book) {
    this.books.push(book)
    // console.log(this.books);
    this.renderBooks()
    localStorage.setItem("books", JSON.stringify(this.books))
  }
  private getFromLocalStroage() {
    let stored = localStorage.getItem("books")
    if (stored) {
      this.books = JSON.parse(stored)
    }
  }
  remove(id: number): void {
    this.books = this.books.filter(book => book.id !== id)
    // console.log(this.books);
    this.renderBooks()
  }
  renderBooks(): void {
    const currentBooksDiv = document.getElementById("currenBook") as HTMLDivElement;
    currentBooksDiv.innerHTML = '';
    this.books.forEach(book => {
      const bookDiv = document.createElement('div') as HTMLDivElement;
      bookDiv.className = 'book';
      bookDiv.innerHTML = `
        <p>${book.name}</p>
        <p>${book.author}</p>
        <button onclick="library.remove(${book.id})">Remove</button>
      `;
      currentBooksDiv.appendChild(bookDiv);
    });
  }

}

class Book {
  name: string;
  author: string
  id: number
  constructor(name: string, author: string) {
    this.id = Date.now()
    this.name = name
    this.author = author
  }
}

let library = new Library()

submitInput.addEventListener("click", (e) => {
  e.preventDefault();
  if (bookNameinput.value && authorNameinput.value) {
    const book = new Book(bookNameinput.value, authorNameinput.value)
    library.addBook(book);
  }

})
library.renderBooks()

