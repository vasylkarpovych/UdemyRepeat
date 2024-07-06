"use strict";

// // фукнции конструкторы
// function User(name, age) {
//   this.name = name;
//   let userAge = age;

//   this.say = function () {
//     console.log(`Name user: ${this.name}, age: ${userAge}`);
//   };

//   this.getAge = function () {
//     return userAge;
//   };

//   this.setAge = function (age) {
//     if (typeof age === "number" && age > 0 && age < 110) {
//       userAge = age;
//     } else {
//       console.log(
//         `Invalid value age: ${age}. Write the age from 0 to 110 years.`
//       );
//     }
//   };
// }

// const ivan = new User("Ivan", 29);
// console.log(ivan.name);
// console.log(ivan.getAge());
// ivan.say();

// ivan.setAge(50);
// ivan.setAge(500);

// console.log(ivan.getAge());

// ivan.say();

// теперь сделаем на классах

class User {
  constructor(name, age) {
    this.name = name;
    this._age = age;
  }

  #surname = "Ivanych";

  say = () => {
    console.log(`Name user: ${this.name} ${this.#surname}, age: ${this._age}`);
  };

  get age() {
    return this._age;
  }

  set age(age) {
    if (typeof age === "number" && age > 0 && age < 110) {
      this._age = age;
    } else {
      console.log(
        `Invalid value age: ${age}. Write the age from 0 to 110 years.`
      );
    }
  }

  getSurname = () => {
    return this.#surname;
  };

  setSurname = (surname) => {
    this.#surname = surname;
  };
}

const ivan = new User("Ivan", 29);
ivan.say();
console.log(ivan.getSurname());
ivan.setSurname("Vasek");
console.log(ivan.getSurname());
