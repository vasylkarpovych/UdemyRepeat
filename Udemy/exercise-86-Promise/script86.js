"use strict";

// console.log("Data request...");

// const req = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Data preparation...");

//     const product = {
//       name: "TV",
//       price: 2000,
//     };

//     resolve(product);
//   }, 2000);
// });

// req
//   .then((product) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         product.status = "order";
//         resolve(product);
//       }, 2000);
//     });
//   })
//   .then((data) => {
//     data.modify = true;
//     return data;
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch(() => {
//     console.error("Error occurred");
//   })
//   .finally(() => {
//     console.log("Finally always work");
//   });

const test = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), time);
  });
};

// test(1000).then(() => console.log("1000 ms"));
// test(3000).then(() => console.log("3000 ms"));

// Promise.all([test(1000), test(3000)]).then(() => {
//   console.log("All");
// });

Promise.race([test(1000), test(3000)]).then(() => {
  console.log("1000");
});
