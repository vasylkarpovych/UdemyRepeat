// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

window.addEventListener("DOMContentLoaded", () => {
  const box = document.querySelector(".box");

  box.addEventListener("touchstart", (e) => {
    e.preventDefault();

    console.log("start");
    console.log(e.touches);
    console.log(e.targetTouches);
    console.log(e.changedTouches);
  });

  box.addEventListener("touchmove", (e) => {
    e.preventDefault();

    console.log(e.targetTouches[0].pageX);
  });

  // box.addEventListener("touchend", (e) => {
  //   e.preventDefault();

  //   console.log("end");
  // });
});

// три головних властивості, при роботі з сенсорними застосунками:
// touches - показує скільки пальців взаємодіють з екраном
// targetTouches - показує скільки пальців взаємодіють з саме елементом
// changedTouches - список пальців, що участвують в нашій поточній події
