"use strict";

// const someRes = getData();
// const node = document.querySelector(".class");

// setInterval(function () {
//   if (node) {
//     node.innerHTML = someRes;
//   }
// }, 1000);

// function outer() {
//   const potentiallyHugeArray = [];
//   return function inner() {
//     potentiallyHugeArray.push("Hello");
//     console.log("Hello!");
//   };
// }

// const sayHello = outer();

// function createElement() {
//   const div = document.createElement("div");
//   div.id = "test";
//   return div;
// }

// const testDiv = createElement();
// document.body.append(testDiv);

// function deleteElement() {
//   document.body.removeChild(document.getElementById("test"));
// }

// deleteElement();

// let user = { name: "Ivan" };
// const arr = [user];

// user = null;

// console.log(user);
// console.log(arr[0]);

// let user = { name: "Ivan" };

// let map = new WeakMap();
// map.set(user, "data");

// user = null;

// console.log(user);
// console.log(map);

let cache = new WeakMap();

function cacheUser(user) {
  if (!cache.has(user)) {
    cache.set(user, Date.now());
  }
  return cache.get(user);
}

let lena = { name: "Elena" };
let alex = { name: "Alex" };

cacheUser(lena);
cacheUser(alex);

lena = null;

// console.log(cache.has(lena));
// console.log(cache.has(alex));

// WeakSet підтримує методи: add, has, delete

let messages = [
  { text: "Hello", from: "John" },
  { text: "Hi", from: "Vasek" },
  { text: "You", from: "Aleksei" },
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
// readMessages.add(messages[1]);

readMessages.add(messages[0]);

messages.shift();

console.log(readMessages.has(messages[0]));
// console.log(readMessages.has(messages[1]));
// console.log(readMessages.has(messages[2]));
