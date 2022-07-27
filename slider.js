const pagination = document.querySelector(".slider__pagination");
const dots = document.querySelectorAll(".slider__dot");
const slider = document.querySelector(".slider__container");
const sliderItems = document.querySelectorAll(".slider__item");
let currentSlide;

// slider
function slide(current) {
  if (current === 1) {
    slider.style.transform = "translate(860px)";
  } else if (current === 2) {
    slider.style.transform = "translate(0)";
  } else if (current === 3) {
    slider.style.transform = "translate(-860px)";
  }
}

function setCurrentSlide(current) {
  currentSlide = current;
  slide(current);
}

sliderItems.forEach((el, index) => {
  el.addEventListener("click", () => {
    setCurrentSlide(index + 1);
    styleBtns();
  });
});

dots.forEach((el, index) => {
  el.addEventListener("click", () => {
    setCurrentSlide(index + 1);
    styleBtns();
  });
});

function styleBtns() {
  dots.forEach((el, index) => {
    el.classList.remove("active");
    if (index + 1 == currentSlide) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("load", () => {
  setCurrentSlide(2);
});
