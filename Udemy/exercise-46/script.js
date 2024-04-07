// // console.log(document.head); // в консоль выводит <head>
// // console.log(document.documentElement); // в консоль выводит <html>
// // console.log(document.body.childNodes); // в консоль выводит все дочерние ноды (узлы, включая перенос троки) родителя <body>
// // console.log(document.body.firstChild); // в консоль первую дочернюю ноду (узел, включая перенос троки) родителя <body>
// // console.log(document.body.lastChild); // в консоль последнюю дочернюю ноду (узел, включая перенос троки) родителя <body>

// console.log(document.querySelector("#current").parentNode); // получаем родителя элемента с id='current'
// console.log(document.querySelector("#current").parentNode.parentNode); // получаем родителя-РОДИТЕЛЯ элемента с id='current'

// ===========================================================================

// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);
// console.log(document.body.lastElementChild);

// console.log(document.querySelector("#current").parentNode.parentNode);
// console.log(document.querySelector("#current").parentNode.parentElement);

// console.log(
//   document.querySelector('[data-current="3"]').previousElementSibling
// );

for (let node of document.body.childNodes) {
  if (node.nodeName === "#text") {
    continue;
  }
  console.log(node);
}
