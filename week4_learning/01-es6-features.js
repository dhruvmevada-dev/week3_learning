// 01-es6-features.js
// Demonstrates: let/const, arrow functions, template literals,
// destructuring, default params, spread/rest, and modules-style exports.

// let/const vs var
const PI = 3.14159;
let counter = 0;
counter++;

// Template literals
const name = "Dhruv";
const greeting = `Hello, ${name}! Counter is now ${counter}.`;

// Arrow functions
const square = (x) => x * x;
const add = (a, b = 5) => a + b; // default parameter

// Destructuring
const user = { id: 1, username: "dhruvmevada-dev", role: "developer" };
const { username, role } = user;

const numbers = [10, 20, 30, 40];
const [first, second, ...rest] = numbers; // array destructuring + rest

// Spread operator
const moreNumbers = [...numbers, 50, 60];
const mergedUser = { ...user, active: true };

// Template + arrow + destructuring combined
const describeUser = ({ username, role }) =>
  `${username} works as a ${role}`;

// Run demo
console.log(greeting);
console.log("Square of 6:", square(6));
console.log("Add with default:", add(10));
console.log("Destructured:", username, role);
console.log("Array destructure -> first:", first, "second:", second, "rest:", rest);
console.log("Spread array:", moreNumbers);
console.log("Spread object:", mergedUser);
console.log(describeUser(user));

module.exports = { square, add, describeUser };
