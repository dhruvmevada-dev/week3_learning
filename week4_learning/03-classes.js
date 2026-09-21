// 03-classes.js
// Demonstrates: class syntax, constructors, methods, getters/setters,
// inheritance, super, and static members.

class Animal {
  #energy; // private field

  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
    this.#energy = 100;
  }

  makeSound() {
    return `${this.name} says ${this.sound}`;
  }

  get energy() {
    return this.#energy;
  }

  set energy(value) {
    this.#energy = Math.max(0, Math.min(100, value));
  }

  static describeSpecies() {
    return "Animals are living organisms.";
  }
}

// Inheritance
class Dog extends Animal {
  constructor(name, breed) {
    super(name, "Woof"); // call parent constructor
    this.breed = breed;
  }

  fetch() {
    this.energy -= 10;
    return `${this.name} (${this.breed}) fetched the ball! Energy left: ${this.energy}`;
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name, "Meow");
  }

  nap() {
    this.energy += 20;
    return `${this.name} took a nap. Energy now: ${this.energy}`;
  }
}

// Run demo
const dog = new Dog("Rex", "Labrador");
const cat = new Cat("Whiskers");

console.log(dog.makeSound());
console.log(cat.makeSound());
console.log(dog.fetch());
console.log(cat.nap());
console.log("Static call:", Animal.describeSpecies());
console.log("Is dog an Animal?", dog instanceof Animal);

module.exports = { Animal, Dog, Cat };
