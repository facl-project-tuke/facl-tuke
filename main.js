"use strict";

const aboutBtn = document.querySelector(".navigation__item_about");
const homeBtn = document.querySelector(".navigation__item_home");
const introContent = document.querySelector(".intro");
const mainContent = document.querySelector(".main");

aboutBtn.addEventListener("click", () => {
  homeBtn.classList.remove("navigation__item--active");
  aboutBtn.classList.add("navigation__item--active");
  introContent.style.display = "none";
  mainContent.style.display = "none";
  document.querySelector(".container_cards").style.display = "flex"
});

homeBtn.addEventListener("click", () => {
  aboutBtn.classList.remove("navigation__item--active");
  homeBtn.classList.add("navigation__item--active");
  introContent.style.display = "block";
  mainContent.style.display = "block";
  document.querySelector(".container_cards").style.display = "none"
});
