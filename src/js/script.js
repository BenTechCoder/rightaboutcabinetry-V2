const navElement = document.getElementById("main-nav");
const mobileDropdownToggle = document.querySelector(".mobile-dropdown-toggle");
const navCloseButton = document.querySelector(".nav-close-btn");
const navLogo = document.querySelector(".logo");
mobileDropdownToggle.addEventListener("click", () => {
  // when we click our button, toggle a CSS class!
  navElement.classList.toggle("dropdown-opened");
  mobileDropdownToggle.classList.toggle("open");
  navLogo.classList.toggle("color-dark");
});

navCloseButton.addEventListener("click", () => {
  navElement.classList.toggle("dropdown-opened");
  mobileDropdownToggle.classList.toggle("open");
  navLogo.classList.toggle("color-dark");
});

let closeModal = document.getElementsByClassName("close")[0];

closeModal.addEventListener("click", function () {
  modal.style.display = "none";
});

let closeBtn = document.querySelector(".close-btn");
closeBtn.onclick = function () {
  modal.style.display = "none";
};

let modal = document.querySelector(".modal");
let modalImg = document.querySelector(".modal-img");
let img = document.querySelector(".portfolio-img-container,.services-img-container");
let captionText = document.querySelector(".caption");
Array.from(img.getElementsByTagName("img")).forEach((item) => {
  item.onclick = function () {
    modal.style.display = "grid";
    modalImg.alt = this.alt;
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
});
