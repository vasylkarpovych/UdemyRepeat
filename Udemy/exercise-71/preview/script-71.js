"use strict";

const box = document.querySelector(".box"),
  btn = document.querySelector("button");

// const width = box.clientWidth;
// const height = box.clientHeight;
// const width = box.offsetWidth;
// const height = box.offsetHeight;
const width = box.scrollWidth;
const height = box.scrollHeight;

console.log(width, height);

// console.log(box.offsetWidth);
// console.log(box.offsetHeight);
// console.log(box.scrollHeight);
// console.log(box.scrollTop);
// console.log(box.clientLeft);
// console.log(box.clientTop);

btn.addEventListener("click", () => {
  box.style.height = box.scrollHeight + "px";

  console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect());

const style = window.getComputedStyle(box);
console.log(style.display);

console.log(document.documentElement.scrollTop);
