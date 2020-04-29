"use strict";

let arrMenuItemsValues = {
  "icoEng": ["Structure", "Tokamaks", "Seminars", "Conferences","Journals","History"],
  "icoRus": ["Структура", "Токамаки", "Семинары", "Конференции","Обозрение","История"]
}

let SubheaderText = {
  "icoEng": "High Temperature Plasma Physics Lab",
  "icoRus": "Лаборатория физики высокотемператруной плазмы"
}
let SubheaderUrlText = {
  "icoEng": "Division of Plasma Physics, Atomic Physics and Astrophysics<br>Ioffe Institute, Russian Academy of Science",
  "icoRus": "Отделение физики плазмы, атомной физики и астрофизики<br>Физико-технический институт имени А.Ф. Иоффе Российской академии наук"
}

let arrMenuItemsText = document.querySelectorAll(".menuitem_text");
// console.log(arrMenuItemsText)
// Array.from(arrMenuItemsText).map (function (item, index) {
//   console.log(arrMenuItemsValues['icoEng'][index])
//   console.log(arrMenuItemsValues['icoRus'][index])

// })
console.log(document.querySelector(".subheader_url"))

let langButton = document.querySelector (".language_ico")
langButton.addEventListener('click', function(event) {
  this.src = (this.id == "icoRus") ? "../img/icoEng.png" : "../img/icoRus.png";
  this.id = (this.id == "icoRus") ? "icoEng" : "icoRus";
  let id = (this.id == "icoRus") ? "icoEng" : "icoRus";

  // if (this.id == "icoRus") {
  //   this.id = "icoEng";
  //   this.src = "../img/icoEng.png";
  // } else {
  //   this.id = "icoRus";
  //   this.src = "../img/icoRus.png";
  // }
  let arrMenuItemsText = document.querySelectorAll(".menuitem_text");
  Array.from(arrMenuItemsText).map (function (item, index) {
    item.innerText = (arrMenuItemsValues[id][index])
    // console.log(arrMenuItemsValues['icoRus'][index])
  })
  document.querySelector(".subheader").innerText = SubheaderText[id]
  document.querySelector(".subheader_url").innerHTML = SubheaderUrlText[id]
})
