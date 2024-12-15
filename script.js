// 1. Exploring JavaScript Objects
// Task 1: Create a constructor function for the Book object with properties for title, author, and pages.
// Task 2: Implement a method within the Book object to display book information.

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.display = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages`;
    };
}

// Task 3: Create an array to store book objects and implement functions to add new books and search for books by title or author.

let library = [];

function addBook(title, author, pages) {
    const book = new Book(title, author, pages);
    library.push(book);
}

function searchByTitle(title) {
    return library.filter(book => book.title === title);
}

function searchByAuthor(author) {
    return library.filter(book => book.author === author);
}

// Task 4: Create functions that utilize the filter method to filter out books that contain more than 100 pages and the map method to add "Title: " and "Author: " to the book's title and author properties respectably.

function filterByPages() {
    return library.filter(book => book.pages > 100);
}

function addPrefix() {
    return library.map(book => ({
        ...book,
        title: `Title: ${book.title}`,
        author: `Author: ${book.author}`
    }));
}

addBook('The Hobbit', 'J.R.R. Tolkien', 295);
addBook('The Lion, the Witch, and the Wardrobe', 'C.S. Lewis', 208);
addBook('The Cat in the Hat', 'Dr. Seuss', 61);
addBook('The Great Gatsby', 'F. Scott Fitzgerald', 180);

console.log(library[0].display());
console.log("Search 'The Hobbit' by title:", searchByTitle('The Hobbit'));
console.log("Search 'C.S. Lewis' by Author:", searchByAuthor('C.S. Lewis'));
console.log("Books over 100 pages:", filterByPages());
console.log("Add prefixes:", addPrefix());