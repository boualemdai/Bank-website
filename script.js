"use strict";
/////elements
const header = document.querySelector("header");

const navbar = document.querySelector("nav");
const secondSection = document.querySelector(".second-section");
const line1 = document.querySelector(".l1");
const line2 = document.querySelector(".l2");
const line3 = document.querySelector(".l3");
const line4 = document.querySelector(".l4");
const firstSection = document.querySelector(".first-section");
const btns = document.querySelectorAll(".btn");
const cir = document.querySelector(".cir");
const thirdSection = document.querySelector(".third-section");
const blabla = document.querySelector(".blabla");
const slidleft = document.querySelector(".left");
const sliderBox = document.querySelectorAll(".slider-box");
const slidright = document.querySelector(".right");
const wrapper = document.querySelector(".wrapper");
const fourthSection = document.querySelector(".fourth-section");
const fifthSection = document.querySelector(".fifth-section");
const openAcc = document.querySelectorAll(".open-account");
const sixthSection = document.querySelector(".sixth-section");
const overly = document.querySelector(".overly");
const nextBtn = document.getElementById("nbtn");
const learnMore = document.querySelector(".learn-more");

///////////////////////////////-----------------

function smoothMove() {
  //  window.scrollTo({left:secondSection.getBoundingClientRect().left,
  //   top:secondSection.getBoundingClientRect().top+window.scrollY,
  // behavior:"smooth",
  // })
  secondSection.scrollIntoView({ behavior: "smooth" });
  learnMore.removeEventListener("click", smoothMove);
}
learnMore.addEventListener("click", smoothMove);

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

firstSection.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.getAttribute("href")) {
    let targetSection = document.querySelector(e.target.getAttribute("href"));
    targetSection.scrollIntoView({
      behavior: "smooth",
    });
  }
});


// sections observer


function sectionsObs(section,line){
  const sectionObserver=new IntersectionObserver(([entry])=>{
    if(entry.isIntersecting){
      section.classList.add("visible");
      line.classList.add("visible");
    }
  },{
  root:null,
  threshold:0.1,
  })
  sectionObserver.observe(section)
  }
sectionsObs(secondSection,line1)
sectionsObs(thirdSection,line2)
sectionsObs(fourthSection,line3)
sectionsObs(fifthSection,line4)




// window.addEventListener("scroll", () => {
//   let y = window.scrollY;
  // if (y > firstSection.scrollHeight * 0.6) {
  //   secondSection.classList.add("visible");
  //   line1.classList.add("visible");
  // }
 

  // if (y >= firstSection.scrollHeight) {
  //   navbar.classList.add("fixed-nav");
  // } else {
  //   navbar.classList.remove("fixed-nav");
  // }
  // if (y > firstSection.scrollHeight + secondSection.scrollHeight * 0.8) {
  //   thirdSection.classList.add("visible");
  //   line2.classList.add("visible");
  // }
  // if (
  //   y >
  //   firstSection.scrollHeight +
  //     secondSection.scrollHeight +
  //     thirdSection.scrollHeight * 0.8
  // ) {
  //   fourthSection.classList.add("visible");
  //   line3.classList.add("visible");
  // }
//   if (
//     y >
//     firstSection.scrollHeight +
//       secondSection.scrollHeight +
//       thirdSection.scrollHeight +
//       fourthSection.scrollHeight * 0.8
//   ) {
//     fifthSection.style.opacity = "1";
//     line4.classList.add("visible");
//   }
// });






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

slidleft.addEventListener("click", () => {
  let newPosition = parseInt(window.getComputedStyle(wrapper)["left"]) + 800;
  newPosition > 0 ? (newPosition = -1600) : newPosition;
  wrapper.style.left = `${newPosition}px`;
});

slidright.addEventListener("click", () => {
  let newPosition = parseInt(window.getComputedStyle(wrapper)["left"]) - 800;
  newPosition < -1600 ? (newPosition = 0) : newPosition;
  wrapper.style.left = `${newPosition}px`;
});

openAcc.forEach((e) => {
  e.addEventListener("click", () => {
    sixthSection.style.display = "flex";
    overly.style.display = "block";
    overly.style.height = window.getComputedStyle(document.body)["height"];
  });
});

const exit = function (e) {
  e.preventDefault();
  sixthSection.style.display = "none";
  overly.style.display = "none";
};
nextBtn.addEventListener("click", exit);
overly.addEventListener("click", exit);

document.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key === "Escape") {
    sixthSection.style.display = "none";
    overly.style.display = "none";
  }
});

const obsOption = {
  root: null,
  threshold: 0,
  
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    
    if (!entry.isIntersecting) {
      navbar.classList.add("fixed-nav");
    } else {
      navbar.classList.remove("fixed-nav");
    }
  });
}, obsOption);
observer.observe(firstSection);
// .isIntersecting===false &&entries.





