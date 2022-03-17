"use strict";
/////elements
const header = document.querySelector("header");

const navbar = document.querySelector("nav");
const secondSection = document.querySelector(".second-section");
const line1 = document.querySelector(".l1");
const line2 = document.querySelector(".l2");
const firstSection = document.querySelector(".first-section");
const btns = document.querySelectorAll(".btn");
const cir = document.querySelector(".cir");
const thirdSection = document.querySelector(".third-section");
const blabla = document.querySelector(".blabla");

Array.from(navbar.children).forEach((el) => {
  if (el !== header) {
    el.addEventListener("mouseover", () => {
      Array.from(navbar.children).forEach((e) => {
        if (e !== el) {
          e.style.opacity = "0.5";
        }
      });
    });
    el.addEventListener("mouseout", () => {
      Array.from(navbar.children).forEach((e) => {
        e.style.opacity = "1";
      });
    });
  }
});

window.addEventListener("scroll", () => {
  let y = window.scrollY;
  if (y > firstSection.scrollHeight * 0.6) {
    secondSection.classList.add("visible");
    line1.classList.add("visible");
  }
  if (y >= firstSection.scrollHeight - navbar.clientHeight - 1) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  if (y > firstSection.scrollHeight + secondSection.scrollHeight * 0.7) {
    thirdSection.classList.add("visible");
    line2.classList.add("visible");
  }
});

Array.from(btns).forEach((e) => {
  e.addEventListener("click", () => {
    cir.style.backgroundColor = window.getComputedStyle(e)["background-color"];
    for (let i = 1; i < 4; i++) {
      if (
        document.querySelectorAll(`.a${i}`) !==
        document.querySelectorAll(`.a${parseInt(e.textContent)}`)
      ) {
        document
          .querySelectorAll(`.a${i}`)
          .forEach((el) => el.classList.add("hid"));
      }
    }
    document.querySelectorAll(`.a${parseInt(e.textContent)}`).forEach((e) => {
      e.classList.remove("hid");
    });

    Array.from(btns).forEach((el) => {
      if (el === e) {
        el.style.transform = "translateY(25%)";
      } else {
        el.style.transform = "translateY(50%)";
      }
    });
  });
});
