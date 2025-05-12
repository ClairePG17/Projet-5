// Array of slide objects containing image paths and HTML taglines
const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// DOM elements selection
const dotsContainer = document.querySelector(".dots");
const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

// Current slide index
let currentSlide = 0;

// Create navigation dots dynamically based on the number of slides
slides.forEach((slide, index) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (index === 0) dot.classList.add("dot_selected"); // Highlight the first dot
  dotsContainer.appendChild(dot);

  // Add click event to each dot to jump to corresponding slide
  dot.addEventListener("click", () => {
    updateSlide(index);
  });
});

// Function to update image, tagline, and selected dot
function updateSlide(index) {
  currentSlide = index;
  bannerImg.src = `./assets/images/slideshow/${slides[index].image}`; // Update image
  bannerText.innerHTML = slides[index].tagLine; // Update tagline with possible HTML

  // Update dot selection by toggling the class
  const allDots = dotsContainer.querySelectorAll(".dot");
  allDots.forEach((dot, i) => {
    dot.classList.toggle("dot_selected", i === index);
  });
}

// Event listener for left arrow: go to previous slide
arrowLeft.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Wrap around if needed
  updateSlide(currentSlide);
});

// Event listener for right arrow: go to next slide
arrowRight.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length; // Wrap around at the end
  updateSlide(currentSlide);
});
