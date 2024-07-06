"use strict";

// // filter

// const names = ["Ivan", "Ann", "Ksenia", "Ivanych"];

// const shortNames = names.filter((name) => {
//   return name.length < 5;
// });

// console.log(shortNames);

// // map

// let answers = ["IvAn", "AnnA", "Hello"];

// const answersNormal = answers.map((elem) => elem.toLowerCase());

// console.log(answersNormal);

// every / some ------ці два методи повертають нам саме булінові значення

// const arrSome = [4, "any string", "any text"];

// console.log(
//   arrSome.some((item) => {
//     return typeof item === "number";
//   })
// );

// const arrEvery = [4, "any string", "any text"];

// console.log(
//   arrEvery.every((item) => {
//     return typeof item === "number" || typeof item === "string";
//   })
// );

// reduce

// const arr = [4, 5, 1, 3, 2, 6];

// const resSum = arr.reduce((sum, current) => {
//   return sum + current;
// }, 100);

// console.log(resSum);

// const arr = ["apple", "sony", "lg", "samsung", "tesla", "nokia"];

// const resSum = arr.reduce((sum, current) => {
//   return `${sum}, ${current}`;
// });

// console.log(resSum);

const obj = {
  ivan: "person",
  ann: "person",
  dog: "animal",
  cat: "animal",
};

const newArr = Object.entries(obj)
  .filter((item) => item[1] === "person")
  .map((item) => item[0]);

console.log(newArr);
