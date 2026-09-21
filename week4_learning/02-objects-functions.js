// 02-objects-functions.js
// Demonstrates: object literals, methods, 'this', function types,
// higher-order functions, and basic OOP via object factories.

// Object literal with a method
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
  describe() {
    return `${this.year} ${this.brand} ${this.model}`;
  },
};

// Function declaration
function multiply(a, b) {
  return a * b;
}

// Function expression
const divide = function (a, b) {
  return b !== 0 ? a / b : null;
};

// Higher-order function (takes a function as an argument)
function calculate(a, b, operation) {
  return operation(a, b);
}

// Factory function (simple OOP-style object creation without classes)
function createPerson(name, age) {
  return {
    name,
    age,
    greet() {
      return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
    },
  };
}

// Array of objects + array methods (map/filter/reduce) tying objects & functions together
const people = [
  createPerson("Asha", 25),
  createPerson("Rohan", 30),
  createPerson("Meera", 22),
];

const names = people.map((p) => p.name);
const adults = people.filter((p) => p.age >= 25);
const totalAge = people.reduce((sum, p) => sum + p.age, 0);

// Run demo
console.log(car.describe());
console.log("Multiply:", calculate(4, 5, multiply));
console.log("Divide:", calculate(10, 2, divide));
people.forEach((p) => console.log(p.greet()));
console.log("Names:", names);
console.log("Adults (25+):", adults.map((p) => p.name));
console.log("Total age:", totalAge);

module.exports = { car, multiply, divide, createPerson };
