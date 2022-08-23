window.onload = function() {
  console.log("hello");

  addClickHandler();
}

const addClickHandler = () => {
  document.querySelector('.hamburger').addEventListener('click', (e) => {
    document.querySelector('.nav').classList.toggle('active');
    document.querySelector('.hamburger').classList.toggle('active');
    document.querySelector('body').classList.toggle('_lock');
  })
}