const pagination = document.querySelector(".slider__pagination");
const dots = document.querySelectorAll(".slider__dot");

const slider = document.querySelector(".slider__container");
const slierItem = document.querySelectorAll(".slider__item");

pagination.addEventListener("click", (e) => {
  if (e.target.classList.contains("slider__dot")) {
    if (e.target == document.getElementById("btn1")) {
      slider.style.transform = "translate(860px)";
    } else if (e.target == document.getElementById("btn2")) {
      slider.style.transform = "translate(0)";
    } else if (e.target == document.getElementById("btn3")) {
      slider.style.transform = "translate(-860px)";
    }
  }
});

slider.addEventListener("click", (e) => {
  if (e.target.parentElement.classList.contains("slider__item")) {
    if (e.target.parentElement == document.getElementById("slide1")) {
      slider.style.transform = "translate(860px)";
    } else if (e.target.parentElement == document.getElementById("slide2")) {
      slider.style.transform = "translate(0)";
    } else if (e.target.parentElement == document.getElementById("slide3")) {
      slider.style.transform = "translate(-860px)";
    }
  }
});

// active btns styles
const setActiveButtonStyle = () => {
  pagination.addEventListener("click", (e) => {
    if (e.target.classList.contains("slider__dot")) {
      dots.forEach((el) => {
        el.classList.remove("active");
      });
      e.target.classList.add("active");
    }
  });
};

setActiveButtonStyle();
