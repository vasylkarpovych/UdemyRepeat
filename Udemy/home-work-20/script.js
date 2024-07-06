"use strict";

const films = [
  {
    name: "Titanic",
    rating: 9,
  },
  {
    name: "Die hard 5",
    rating: 5,
  },
  {
    name: "Matrix",
    rating: 8,
  },
  {
    name: "Some bad film",
    rating: 4,
  },
];

// функція повертає масив з фільмами, де рейтинг вищий або дорівлнює 8
// моє рішення

function showGoodFilms(arr) {
  return arr.filter((film) => {
    return film.rating >= 8;
  });
}

// // рішення у відповіді
// function showGoodFilms(arr) {
//     return arr.filter(film => film.rating >= 8);
// }

// функція повертає строку з усіма фільмами через кому
// моє рішення

function showListOfFilms(arr) {
  return arr.reduce((allFilms, film, index) => {
    const separator = index === 0 ? "" : ", ";
    return `${allFilms}${separator}${film.name}`;
  }, "");
}

// // рішення у відповіді
// function showListOfFilms(arr) {
//   return arr.reduce(
//     (acc, curr) => `${typeof acc === "object" ? acc.name : acc}, ${curr.name}`
//   );
// }

// функція такий самий масив, але тепер у кожного фільма буде id зі значанням фільму по порядку
// моє рішення

function setFilmsIds(arr) {
  return arr.map((film, index) => {
    film.id = index;
    return film;
  });
}

// // рішення у відповіді
// function setFilmsIds(arr) {
//   return arr.map((film, i) => {
//     film.id = i;
//     return film;
//   });
// }

// функція такий самий масив, але тепер у кожного фільма буде id зі значанням фільму по порядку
// моє рішення

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
  return arr.every((item) => item.id !== undefined);
}

// // рішення у відповіді

// const tranformedArray = setFilmsIds(films);

// // При срабатывании every на первом фильме он натыкается на id = 0;
// // 0 - это неправда в логическом ключе, поэтому и весь метод возвращает false
// // Учитывайте этот момент
// function checkFilms(arr) {
//   return arr.every((film) => (film.id || film.id === 0 ? true : false));
// }

// // Еще короче, так как условие все равне вернет true или false:
// // function checkFilms(arr) {
// //     return arr.every(film => film.id || film.id === 0)
// // }

// // Максимально коротко, но еще читаемо:
// // const checkFilms = (arr) => arr.every(film => film.id || film.id === 0)

// ============================================================================

// console.log(showGoodFilms(films));
// console.log(showListOfFilms(films));
// console.log(setFilmsIds(films));
// console.log(checkFilms(tranformedArray));
