"use strict";

function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function () {
    console.log(`Hello ${this.name}`);
  };
}

User.prototype.exit = function (name) {
  console.log(`User ${this.name} went home!`);
};

const ivan = new User("Ivan", 1);
const alex = new User("Alex", 2);

ivan.hello();
alex.hello();
ivan.exit();

console.log(ivan);
console.log(alex);
