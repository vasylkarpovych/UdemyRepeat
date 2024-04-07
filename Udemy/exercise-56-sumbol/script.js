"use strict";

// const obj = {
//   name: "test",
//   [Symbol("id")]: 1,
//   getId: function () {
//     return this[id];
//   },
// };

// // let id = Symbol("id");

// // obj[id] = 1;

// console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);

// // for (let value in obj) console.log(value);

// ============================================================

const myAwesomeDB = {
  movies: [],
  actors: [],
  //   id: 123,
  [Symbol.for("id")]: 123,
};

// сторонній код бібліотеки

myAwesomeDB.id = "15321";

console.log(myAwesomeDB[Symbol.for("id")]);
console.log(myAwesomeDB);
