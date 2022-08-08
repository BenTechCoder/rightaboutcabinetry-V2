export default function Gallery(gallery) {
  if (!gallery) {
    throw new Error("No Gallery Found!");
  }

  // select the elements we need
  const images = Array.from(gallery.querySelectorAll("picture"));
  const modal = document.querySelector(".modal");
  const prevButton = modal.querySelector(".prev");
  const nextButton = modal.querySelector(".next");
  const closeButton = modal.querySelector(".close");
  let currentImage;

  function openModal() {
    // First check if the modal is already open
    if (modal.matches(".open")) {
      return; // stop the function from running
    }
    modal.classList.add("open");
    // Event listeners to be bound when we open the modal:
    window.addEventListener("keyup", handleKeyUp);
    nextButton.addEventListener("click", showNextImage);
    prevButton.addEventListener("click", showPrevImage);
    closeButton.addEventListener("click", closeModal);
  }

  function closeModal() {
    modal.classList.remove("open");
    // TODO: add event listeners for clicks and keyboard..
    // removeImage();
    closeButton.removeEventListener("click", closeModal);
    window.removeEventListener("keyup", handleKeyUp);
    nextButton.removeEventListener("click", showNextImage);
    prevButton.removeEventListener("click", showPrevImage);
  }

  function handleClickOutside(e) {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

  function handleKeyUp(e) {
    if (e.key === "Escape") return closeModal();
    if (e.key === "ArrowRight") return showNextImage();
    if (e.key === "ArrowLeft") return showPrevImage();
  }

  function showNextImage() {
    showImage(currentImage.nextElementSibling || gallery.firstElementChild);
  }
  function showPrevImage() {
    showImage(currentImage.previousElementSibling || gallery.lastElementChild);
  }

  function showImage(el) {
    if (!el) {
      console.info("no image to show");
      return;
    }
    // update the modal with this info
    let modalImage = el.outerHTML;
    modal.querySelector(".picture-div").innerHTML = modalImage;
    currentImage = el;
    openModal();
  }

  // These are our Event Listeners!
  images.forEach((image) => image.addEventListener("click", (e) => showImage(e.currentTarget)));

  // loop over each image
  images.forEach((image) => {
    // attach an event listener for each image
    image.addEventListener("keyup", (e) => {
      // when that is keyup'd, check if it was enter
      if (e.key === "Enter") {
        // if it was, show that image
        showImage(e.currentTarget);
      }
    });
  });

  modal.addEventListener("click", handleClickOutside);
}
