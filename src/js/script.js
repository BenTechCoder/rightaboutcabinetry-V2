const hamBurger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
let mobileMenu = () => {
  hamBurger.classList.toggle("active");
  navMenu.classList.toggle("active");
};

hamBurger.addEventListener("click", mobileMenu);

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
Array.from(img.getElementsByTagName('img')).forEach((item) => {
  item.onclick = function () {
    modal.style.display = "grid";
    modalImg.alt = this.alt;
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
});