/* Updating Arrays */
console.log("---Updating Arrays---");

console.log("numbers");
const numbers = [1, 2, 3];
console.log(numbers);

// Adding
console.log("Adding");

const addedAtEnd = [...numbers, 4]; // adding at end of array
const addedAtStart = [4, ...numbers]; // adding at start of array
// adding at a specific position in middle
const index = numbers.indexOf(2); // get index of position
const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)]; // adding between the numbers aarray
console.log(added);

//Removing
console.log("Removing");

const removed = numbers.filter((n) => n !== 2); // removing value 2 from numbers array
console.log(removed);

//Updating
console.log("Updating");

const updatedArray = numbers.map((n) => (n === 2 ? 20 : n)); // replacing value 2 with 20 in numbers array
console.log(updatedArray);                                   // if we had an array of objects we have to take a
                                                             // full copy of the object using spread operator
