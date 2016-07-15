var nojs = document.querySelector(".no-js");
var menu = document.querySelector(".hamburger");
var close = document.querySelector(".active");
var nav = document.querySelector(".top-nav");

document.addEventListener("DOMContentLoaded", function (event) {
  nojs.classList.remove("no-js");
});

menu.addEventListener("click", function (event) {
  event.preventDefault();
  nav.classList.toggle("top-nav-show");
  menu.classList.toggle("active");
});