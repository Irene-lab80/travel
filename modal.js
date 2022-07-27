const modal = document.getElementById("modal");
const btnLogin = document.getElementById("login-button");
const body = document.getElementById("body");

btnLogin.addEventListener("click", () => {
  modal.style.display = "block";
  body.style.overflow = "hidden";
});

window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
    modal.style.display = "none";
    body.style.overflow = "visible";
  }
};
