const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//Partie Création carrousel
	// Création constantes pour les dots

const dotsContainer = document.querySelector(".dots");
const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");


let currentSlide = 0;

	// Création des div et des class associées pour les dots

slides.forEach((slide, index) => {

	const dot = document.createElement("div");
	dot.classList.add("dot");
	if (index === 0) dot.classList.add("dot_selected");
	dotsContainer.appendChild(dot);
	dot.addEventListener("click", () => {
		updateSlide(index);
	})
});

	// Création de la fonction update slide

function updateSlide(index){
	currentSlide = index;
	bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
	bannerText.innerHTML = slides[index].tagLine;
	const allDots = document.querySelectorAll(".dot");
	allDots.forEach((dot, i) => {
		dot.classList.toggle("dot_selected", i === index);
	});	
}
	

	//ajout du listener pour les flèches

const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

arrowLeft.addEventListener("click", () => {
	currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	updateSlide(currentSlide);
});

arrowRight.addEventListener("click", () => {
	currentSlide = (currentSlide + 1) % slides.length;
	updateSlide(currentSlide);
});