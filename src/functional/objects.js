/* Updating Objects */
console.log("---Updating Objects---");

const person = {
  name: "Jhon",
  address: {
    country: "USA",
    city: "San Francisco",
  },
};
const updatedObject = {
  ...person,
  address: {
    ...person.address,
    city: "New York",
  },
  name: "Bob",
};
console.log("Updated");
console.log(updatedObject);