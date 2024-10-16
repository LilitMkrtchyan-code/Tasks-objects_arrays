// Objects:
// 1. Create a User object that contains properties for name, age, and email. Include methods to greet (returns a greeting message) and updateEmail.
// Создайте объект User, содержащий свойства для имени, возраста
// и электронной почты. Включите методы greet (возвращает приветственное сообщение) и updateEmail.
// const user = {
//    name: "Anna",
//    age: 25,
//    email: "margaritaH@gmail.com",
//    greet() {
//       alert(`Hello I am ${this.name}`);
//    },
//    updateEmail(email) {
//       this.email = email;
//    }
// };
// user.greet();
// user.updateEmail("newalice@example.com");
// console.log(user);
// {name: 'Anna', age: 25, email: 'newalice@example.com', greet: ƒ, updateEmail: ƒ}

// ==================================================================================
// 2. Create an array of workers objects with properties for name and age. Write a function that takes an age as a parameter and returns an array of users older than that age.
// Создайте массив объектов-работников со свойствами имени и возраста. Напишите функцию,
// которая принимает возраст в качестве параметра и возвращает массив пользователей
// старше этого возраста.
// const workers = [
//    { name: "Alice", age: 25 },
//    { name: "Bob", age: 30 },
//    { name: "Charlie", age: 22 },
//    { name: "Max", age: 47 }
//  ];

//  function filterUsersByAge(minAge) {
//   return workers.filter((worker) => worker.age > minAge);
//  }
//  const olderUsers = filterUsersByAge(24);
//  console.log(olderUsers);

//======================================================================================
// 3. Modify the book objects to include a pagesRead property. Write a function
// that calculates and returns the total number of pages read from all books.
// Измените объекты книги, включив свойство pagesRead. Напишите функцию,
// которая вычисляет и возвращает общее количество прочитанных страниц из всех книг.

// const collection = [
//    { title: "The Great Gatsby", pages: 180, pagesRead: 100 },
//    { title: "1984", pages: 328, pagesRead: 50 },
//    { title: "To Kill a Mockingbird", pages: 281, pagesRead: 281 }
//  ];
//  function countTotalPagesRead(collection) {
//    let numberOfPages = collection.reduce((sum, el) => el.pagesRead + sum, 0);
//    return numberOfPages;
//  }
//  const totalRead = countTotalPagesRead(collection);
//  console.log(totalRead);

//                     ***** or *****
//  function countTotalPagesRead(collection) {
//    let sum = 0;
//    for (let el of collection) {
//       sum += el.pagesRead
//    }
//    return sum;
//  }
//  const totalRead = countTotalPagesRead(collection);
//  console.log(totalRead);

//======================================================================================
// 4. Create an array of book objects, where each book has properties such as title, author, pages, and isRead.
//    Write a function to add a new book and a function to list all books with their read status.
// Создайте массив объектов книг, где каждая книга имеет такие свойства, как название,
// автор, количество страниц и статус прочтения (isRead).
// Напишите функцию для добавления новой книги и функцию для отображения всех книг с их статусом прочтения

// const library = [];

// function addNewBook(...params) {
//   let [title, author, pages] = params;
//   let isRead = Math.random() > 0.5;

//   let book = {
//     title,
//     author,
//     pages,
//     isRead
//   };
//   library.push(book);
//   return book;
// }
// console.log(addNewBook("The Great Gatsby", "F. Scott Fitzgerald", 180));
// console.log(addNewBook("1984", "George Orwell", 328));

// function listBooks() {
//    for (let book of library) {
//       console.log(book);
//    }
// }
// listBooks();

//=============================================================================================
// 5. Extra: Grouping Library Functions into One Object
// Дополнительно: Группировка функций библиотеки в один объект.

// function getRandomBoolValue() {
//   return Math.random() > 0.5;
// }

// const librarySystem = {
//   books: [],
//   defineIdForBook() {
//     if (this.books.length > 0) {
//       for (let i = 0; i < this.books.length; i++) {
//         this.books[i]["id"] = i + 1;
//       }
//     }
//   },
//   addNewBook(...book) {
//     let [title, author, year, genre] = book;

//     let newBook = {
//       title,
//       author,
//       year,
//       genre,
//       isAvailable: getRandomBoolValue(),
//     };
//     this.books.push(newBook);
//     librarySystem.defineIdForBook();
//     return newBook;
//   },
//   listBooks() {
//     if (this.books.length > 0) {
//       for (let book of this.books) {
//         console.log(
//           `
//              Title: ${book.title}, 
//              Author: ${book.author}, 
//              Year: ${book.year}, 
//              Genre: ${book.genre},
//              IsAvailable: ${book.isAvailable}
//              `
//         );
//       }
//     } else alert("There is no book in the library");
//   },
//   getBookById(bookId) {
//     if (this.books.length > 0) {
//       for (let book of this.books) {
//         if (book.id === bookId) {
//           return book;
//         }
//       }
//     } 
//     return;
//   },
//   updateBook(bookId, ...book) {
//     let [title, author, year, genre] = book;
//     let newBook = { title, author, year, genre, isAvailable: getRandomBoolValue() };

//     if (this.books.length > 0) {
//       for (let i = 0; i < this.books.length; i++) {
//         if (this.books[i]["id"] === bookId) {
//           this.books[i] = newBook;
//           librarySystem.defineIdForBook();
//           return newBook;
//         } else {
//           alert("wrong id");
//           return;
//         }
//       }
//     }
//   },
//   deleteBook(bookId) {
//     let result = false;
//     if (this.books.length > 0) {
//       for (let i = 0; i < this.books.length; i++) {
//         if (this.books[i]["id"] === bookId) {
//           this.books.splice(i, 1);
//           this.defineIdForBook();
//           result = true;
//         }
//       }
//     }
//     return result;
//   },
//   getBooksByAvailableStatus(status) {
//     return this.books.filter((book) => book.isAvailable === status);
//   },
// };
// librarySystem.addNewBook("The Great Gatsby", "F. Scott Fitzgerald", 1925, "modernist literature");
// librarySystem.addNewBook("1984", "George Orwell", 1949, "novel");
// console.log(librarySystem.books);
// librarySystem.listBooks();
// console.log(
//   librarySystem.addNewBook(
//     "The Old Man and the Sea",
//     "Ernest Hemingway",
//     1952,
//     "novel"
//   )
// );
// console.log(librarySystem.getBookById(2));
// console.log(
//   librarySystem.updateBook(
//     1,
//     "Othello",
//     "William Shakespeare",
//     1603,
//     "tragedies"
//   )
// );
// console.log(librarySystem.deleteBook(1)); // true
// console.log(librarySystem.getBooksByAvailableStatus(true));
