/* Enforcing Immutability */
console.log("---Enforcing Immutability---");

// using Immer
console.log("produce function from Immer");
import { produce } from "immer";

console.log("book");
let book = { title: "Harry Potter" };
console.log(book);

// stting a proptery using by mutating object
// function publish(book) {
//   book.isPublished = true;
// }

// console.log("Added");
// publish(book);
// console.log(book);

function publish(book) {
  return produce(book, (draftBook) => {
    draftBook.isPublished = true;
  });
}

console.log("Added");
let addedd = publish(book);
console.log(addedd);
