const $09ed892194edb81a$var$navElement = document.getElementById("main-nav");
const $09ed892194edb81a$var$mobileDropdownToggle = document.querySelector(".mobile-dropdown-toggle");
const $09ed892194edb81a$var$navCloseButton = document.querySelector(".nav-close-btn");
$09ed892194edb81a$var$mobileDropdownToggle.addEventListener("click", (event)=>{
    // when we click our button, toggle a CSS class!
    $09ed892194edb81a$var$navElement.classList.toggle("dropdown-opened");
    $09ed892194edb81a$var$mobileDropdownToggle.classList.toggle("open");
});
$09ed892194edb81a$var$navCloseButton.addEventListener("click", ()=>{
    $09ed892194edb81a$var$navElement.classList.toggle("dropdown-opened");
    $09ed892194edb81a$var$mobileDropdownToggle.classList.toggle("open");
});
let $09ed892194edb81a$var$closeModal = document.getElementsByClassName("close")[0];
$09ed892194edb81a$var$closeModal.addEventListener("click", function() {
    $09ed892194edb81a$var$modal.style.display = "none";
});
let $09ed892194edb81a$var$closeBtn = document.querySelector(".close-btn");
$09ed892194edb81a$var$closeBtn.onclick = function() {
    $09ed892194edb81a$var$modal.style.display = "none";
};
let $09ed892194edb81a$var$modal = document.querySelector(".modal");
let $09ed892194edb81a$var$modalImg = document.querySelector(".modal-img");
let $09ed892194edb81a$var$img = document.querySelector(".portfolio-img-container,.services-img-container");
let $09ed892194edb81a$var$captionText = document.querySelector(".caption");
Array.from($09ed892194edb81a$var$img.getElementsByTagName("img")).forEach((item)=>{
    item.onclick = function() {
        $09ed892194edb81a$var$modal.style.display = "grid";
        $09ed892194edb81a$var$modalImg.alt = this.alt;
        $09ed892194edb81a$var$modalImg.src = this.src;
        $09ed892194edb81a$var$captionText.innerHTML = this.alt;
    };
});


//# sourceMappingURL=index.js.map
