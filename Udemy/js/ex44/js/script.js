// /* Задания на урок:

// 1) Удалить все рекламные блоки со страницы (правая часть сайта)

// 2) Изменить жанр фильма, поменять "комедия" на "драма"

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// Реализовать только при помощи JS

// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту

// 5) Добавить нумерацию выведенных фильмов */

// "use strict";

// const movieDB = {
//   movies: [
//     "Логан",
//     "Лига справедливости",
//     "Ла-ла лэнд",
//     "Одержимость",
//     "Скотт Пилигрим против...",
//   ],
// };

// const advertising = document.querySelectorAll(".promo__adv img"),
//   poster = document.querySelector(".promo__bg"),
//   genre = poster.querySelector(".promo__genre"),
//   films = document.querySelector(".promo__interactive-list");

// advertising.forEach((item) => {
//   item.remove();
// });

// genre.textContent = "ДРАМА";

// poster.style.backgroundImage = 'url("./img/bg.jpg")';

// movieDB.movies.sort();

// films.innerHTML = "";

// movieDB.movies.forEach((film, i) => {
//   films.innerHTML += `<li class='promo__interactive-item'>${
//     i + 1
//   }. ${film}<div class='delete'></div></li>`;
// });

// // <li class="promo__interactive-item">ЛОГАН<div class="delete"></div></li>

// // const advertising = document.querySelectorAll(".promo__adv img"),
// //   poster = document.querySelector(".promo__bg"),
// //   genre = poster.querySelector(".promo__genre"),
// //   films = document.querySelector(".promo__interactive-list");

// // advertising.forEach((item) => {
// //   item.remove();
// // });

// // genre.textContent = "ДРАМА";
// // // genre.innerHTML = '<div class="promo__genre">ДРАМА</div>';

// // poster.style.backgroundImage = "url('./img/bg.jpg')";

// // films.innerHTML = "";

// // movieDB.movies.sort();
// // movieDB.movies.forEach((item, i) => {
// //   films.innerHTML += `<li class='promo__interactive-item'>${
// //     i + 1
// //   }. ${item}<div class='delete'></div></li>`;
// // });

// // console.log(films);

// /*
//   films.innerHTML = "<li class='promo__interactive-item'>ЛОГАН<div class='delete'></div></li>"
// */

// ================================================

/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

// почне працювати тільки коли структура HTML сторінки буде повністю завантажена
document.addEventListener("DOMContentLoaded", () => {
  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
    ],
  };

  const advertising = document.querySelectorAll(".promo__adv img"),
    poster = document.querySelector(".promo__bg"),
    genre = poster.querySelector(".promo__genre"),
    listFilms = document.querySelector(".promo__interactive-list"),
    addForm = document.querySelector("form.add"),
    addFormInput = addForm.querySelector(".adding__input"),
    checkboxForm = addForm.querySelector("[type='checkbox']");

  // виконав перше завдання

  const deleteAdv = (arrAdv) => {
    arrAdv.forEach((image) => {
      image.remove();
    });
  };

  const makeChanges = () => {
    // виконав друге завдання
    genre.textContent = "драма";

    // виконав 3 завдання
    poster.style.backgroundImage = 'url("./img/bg.jpg")';
  };

  // виконав 4 та 5 завдання

  const sortArr = (arr) => {
    arr.sort();
  };

  function createMovieList(films, parent) {
    parent.innerHTML = ""; // видалили стару розмітку
    sortArr(films);

    films.forEach((film, index) => {
      parent.innerHTML += `<li class="promo__interactive-item">${
        index + 1
      }. ${film} <div class="delete"></div></li>`;
    });

    document.querySelectorAll(".delete").forEach((elem, i) => {
      elem.addEventListener("click", () => {
        elem.parentElement.remove();
        movieDB.movies.splice(i, 1);

        createMovieList(films, parent);
      });
    });
  }

  // ======================================================================================
  // 48 exercise
  // ======================================================================================

  addForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let newFilm = addFormInput.value;
    const favoriteFilm = checkboxForm.checked;

    if (newFilm) {
      if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 22)}...`;
      }

      if (favoriteFilm) {
        console.log("добавили улюблений фільм");
      }

      movieDB.movies.push(newFilm);
      sortArr(movieDB.movies);

      createMovieList(movieDB.movies, listFilms);
    }
    event.target.reset();
  });

  deleteAdv(advertising);
  makeChanges();
  createMovieList(movieDB.movies, listFilms);
});
