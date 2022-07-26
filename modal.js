const modal = document.getElementById("modal");
const btn = document.getElementById("login-button");
const closeModal = document.getElementById("close");

btn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};
