"use strict";
/////elements
const header = document.querySelector("header");

const navbar = document.querySelector("nav");
const secondSection=document.querySelector(".second-section")
const line=document.querySelector(".line")
const firstSection=document.querySelector(".first-section")
console.log(firstSection.scrollHeight);
//////event listner


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

window.addEventListener("scroll",()=>{
let y=window.scrollY
if(y>400){
   
secondSection.classList.add("visible")
line.classList.add("visible")

}
if(y>=firstSection.scrollHeight-navbar.clientHeight-1){
    
    navbar.classList.add("fixed-nav")
}else{
    navbar.classList.remove("fixed-nav")
    

}
})
