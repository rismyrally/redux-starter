/* Enforcing Immutability */
console.log("---Enforcing Immutability---");

// using Immutable.js
console.log("Immutable.js data structure Map");
import { Map } from "immutable";

console.log("book");
let book = { title: "Harry Potter" };
console.log(book);

console.log("bookMap");
let bookMap = Map({ title: "Harry Potter" });
console.log(bookMap);

// issues with Map
// cannot directly access property using dot notaion
// console.log(book.title) // will not work
console.log("Book title");
console.log(bookMap.get("title")); // use get method
// hard to integrate with libraries that expect plain Js objects
console.log("Book Object");
console.log(bookMap.toJS()); // have to call toJs() method

// stting a proptery using by mutating object
// function publish(book) {
//   book.isPublished = true;
// }

// publish(book)

// stting a proptery using immutable
function publish(book) {
  return book.set("isPublished", true); // will not modify object will return new object
}

console.log("Added");
bookMap = publish(bookMap);

console.log(bookMap.toJS());
