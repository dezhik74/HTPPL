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

document.querySelector (".language_ico").addEventListener('click', function(event) {
  this.src = (this.id == "icoRus") ? "../img/icoEng.png" : "../img/icoRus.png";
  this.id = (this.id == "icoRus") ? "icoEng" : "icoRus";
  let id = (this.id == "icoRus") ? "icoEng" : "icoRus";

  let arrMenuItemsText = document.querySelectorAll(".menuitem_text");
  Array.from(arrMenuItemsText).map (function (item, index) {
    item.innerText = (arrMenuItemsValues[id][index])
    // console.log(arrMenuItemsValues['icoRus'][index])
  })
  document.querySelector(".subheader").innerText = SubheaderText[id]
  document.querySelector(".subheader_url").innerHTML = SubheaderUrlText[id]
})

let menuButtons = document.querySelectorAll(".menuitem");
Array.from(menuButtons).map (function (item) {
  item.addEventListener ('click', function (event) {
    if (!this.matches(".menuitem_select")) {
      Array.from(menuButtons).map (function (item) {
        item.classList.remove("menuitem_select")
      })
      this.classList.add("menuitem_select")
      // console.log(this.className)
      LoadAndShowContent('./'+this.id+'.html')
      // console.log(this.id)

    }
  })
})

LoadAndShowContent ("./structure.html")

function LoadAndShowContent (url) {
  fetch(url)
    .then (responce => responce.text())
    .then (result => {
      document.querySelector(".content").innerHTML = result
      // console.log("rere " + result)
    })
}

 