"use strict";

const aboutBtn = document.querySelector(".navigation__item_about");
const homeBtn = document.querySelector(".navigation__item_home");
const introContent = document.querySelector(".intro");
const mainContent = document.querySelector(".main");

const introSection = document.querySelector(".intro");
const speed = 0.5;
const offset = window.pageYOffset * speed;

introSection.style.backgroundPosition = "center " + (offset - 50) + "px";

aboutBtn.addEventListener("click", () => {
  homeBtn.classList.remove("navigation__item--active");
  aboutBtn.classList.add("navigation__item--active");
  introContent.style.display = "none";
  mainContent.style.display = "none";
  document.querySelector(".container_cards").style.display = "flex";
});

homeBtn.addEventListener("click", () => {
  aboutBtn.classList.remove("navigation__item--active");
  homeBtn.classList.add("navigation__item--active");
  introContent.style.display = "block";
  mainContent.style.display = "block";
  document.querySelector(".container_cards").style.display = "none";
});

document.addEventListener("scroll", function () {
  const introSection = document.querySelector(".intro");
  const speed = 0.5;
  const offset = window.pageYOffset * speed;

  introSection.style.backgroundPosition = "center " + (offset - 50) + "px";
});

document.getElementById("downloadPdfBtn").addEventListener("click", () => {
  let link = document.createElement("a");
  link.href = "./01 - Enhancing Learning Efficiency in FACL -- A Novel Fuzzy Rule Transfer Method for Transfer Learning - Ni (2024).pdf"; // Замените на актуальный путь к файлу
  link.download = "Enhancing Learning Efficiency in FACL -- A Novel Fuzzy Rule Transfer Method for Transfer Learning - Ni (2024).pdf"; // Необязательный атрибут, задаёт имя скачиваемого файла
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});
