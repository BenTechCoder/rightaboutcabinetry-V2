import Gallery from './gallery'


//navbar script
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



// Use image gallery on the page

Gallery(document.querySelector(".gallery"));
