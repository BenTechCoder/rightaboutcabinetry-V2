import Gallery from './gallery'


//navbar script
// const navElement = document.getElementById("main-nav");
// const mobileDropdownToggle = document.querySelector(".mobile-dropdown-toggle");
// const navCloseButton = document.querySelector(".nav-close-btn");
// const navLogo = document.querySelector(".logo");
// mobileDropdownToggle.addEventListener("click", () => {
//   // when we click our button, toggle a CSS class!
//   navElement.classList.toggle("dropdown-opened");
//   mobileDropdownToggle.classList.toggle("open");
//   navLogo.classList.toggle("color-dark");
// });

// navCloseButton.addEventListener("click", () => {
//   navElement.classList.toggle("dropdown-opened");
//   mobileDropdownToggle.classList.toggle("open");
//   navLogo.classList.toggle("color-dark");
// });


// Reel from every layout

(function() {
  const className = 'reel';
  const reels = Array.from(document.querySelectorAll(`.${className}`));
  const toggleOverflowClass = elem => {
    elem.classList.toggle('overflowing', elem.scrollWidth > elem.clientWidth);
  };

  for (let reel of reels) {
    if ('ResizeObserver' in window) {
      new ResizeObserver(entries => {
        toggleOverflowClass(entries[0].target);
      }).observe(reel);
    }

    if ('MutationObserver' in window) {
      new MutationObserver(entries => {
        toggleOverflowClass(entries[0].target);
      }).observe(reel, {childList: true});
    }
  }
})();

// Use image gallery on the page

const gallery = Gallery(document.querySelector(".declare-gallery"));

const cards = document.querySelectorAll('.tdbc-card');  

Array.prototype.forEach.call(cards, card => {
    let down, up, link = card.querySelector('h3 a');
    card.style.cursor = 'pointer';
    card.onmousedown = () => down = +new Date();
    card.onmouseup = () => {
        up = +new Date();
        if ((up - down) < 200) {
            link.click();
        }
    }
});


const nav = document.querySelector('nav')
const list = nav.querySelector('.mainnav-list');
const burgerClone = document.querySelector('#burger-template').content.cloneNode(true);

const button = burgerClone.querySelector('button');
button.addEventListener('click', e => {
  console.log("WHYYYY")
  const isOpen = button.getAttribute('aria-expanded') === "false"

  button.setAttribute('aria-expanded', isOpen);
});

nav.addEventListener('keyup', e => {
  if (e.code === 'Escape') {
    button.setAttribute('aria-expanded', false);
    button.focus()
  }
});

nav.insertBefore(burgerClone, list);