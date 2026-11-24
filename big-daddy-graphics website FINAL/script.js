
const menuButton =
  document.getElementById("menuButton");
  const mainNav =
  document.getElementById("primaryNav");

  menuButton.addEventListener("click", function () {
  mainNav.classList.toggle("open");
});

// Carousel images //
const carouselImage =
  document.getElementById("carouselImage");

const previousButton =
  document.getElementById("previousButton");

const nextButton =
  document.getElementById("nextButton");

const images = [
  "images/index/staff-photo.jpg","images/index/staff-photo2.png",
  "images/index/staff-photo3.png"
];

let currentImage = 0;

nextButton.addEventListener("click", function () {
  currentImage = currentImage + 1;

  if (currentImage >= images.length) {
    currentImage = 0;
  }

  carouselImage.src = images[currentImage];
});

previousButton.addEventListener("click", function () {
  currentImage = currentImage - 1;

  if (currentImage < 0) {
    currentImage = images.length - 1;
  }

  carouselImage.src = images[currentImage];
});








