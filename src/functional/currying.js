// takes a function with n number of argumenrts => function with 1 argument

// function add(a, b) {
//   return a + b;
// }

function add(a) {
  return function (b) {
    return a + b;
  };
}

// converting it to arrow function
const add2 = (a) => (b) => a + b; // (a, b) => a + b

add(1)(5); // add(1, 5)
