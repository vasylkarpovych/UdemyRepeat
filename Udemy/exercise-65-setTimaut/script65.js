"use strict";

const btn = document.querySelector(".btn");
let timerId,
  num = 0;

function myAnimation() {
  const elem = document.querySelector(".box");
  let pos = 0;

  const id = setInterval(frame, 10);

  function frame() {
    if (pos === 300) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + "px";
      elem.style.left = pos + "px";
    }
  }
}

btn.addEventListener("click", myAnimation);

// function logger() {
//   console.log("text");
//   num++;
//   if (num === 8) {
//     clearInterval(timerId);
//   }
// }

// let id = setTimeout(function log() {
//   console.log("Hello recursion");
//   id = setTimeout(log, 2000);
// }, 2000);
