const generalContentElement = document.querySelector(".general-content");
const caraseoulContainer = generalContentElement.querySelector(
	".general-content-slider"
);
const sliderGeneral = generalContentElement.querySelector(".slider-general");
const itemSlider = sliderGeneral.querySelectorAll(".slider-card");

// variables that will change states throughout the code
let mouseOn = false;
let currentMousePosition = 0;
let lastMousePosition = 0;
let lastMouseMovement = 0;
let moveTo = 0;

const homeSlider = () => {
	const propertiesSlider = onResize();
	const realSize = itemSlider.length; // length of array
	const sizeOfDegrees = 360 / realSize; // grades for each item
	const gap = 30; // space between each item
	const tz = horizontalDistance(propertiesSlider.w, realSize, gap);

	const height = calculateHeight(tz);

	itemSlider.forEach((item, i) => {
		const degreesPerItem = sizeOfDegrees * i + "deg";
		item.style.setProperty("--rotatey", degreesPerItem);
		item.style.setProperty("--tz", tz + "px");
	});
};

// smoothness of animation
const smoothingOfAnimation = (a, b, n) => {
	return n * (a - b) + b;
};

const horizontalDistance = (widthElement, realSize, gap) => {
	return widthElement / 2 / Math.tan(Math.PI / realSize) + gap; // calculating horizontal distance of items
};

//calculates height of container using field of view and perspective distance
const calculateHeight = (z) => {
	const t = Math.atan((90 * Math.PI) / 180 / 2);
	const height = t * 2 * z;

	return height;
};

//calculating field of view of slider
const calculateFieldOfVision = (propertiesSlider) => {
	const perspective = window
		.getComputedStyle(caraseoulContainer)
		.perspective.split("px")[0];

	const realSize = Math.sqrt(
		propertiesSlider.w * propertiesSlider.w +
			propertiesSlider.h * propertiesSlider.h
	);
	const fov = 2 * Math.atan(realSize / (2 * perspective)) * (180 / Math.PI);
	return fov;
};

//fetches the X position and evaluates whether the position is right or left
const getPosX = (x) => {
	currentMousePosition = x;

	moveTo = lastMousePosition < lastMouseMovement ? moveTo - 2 : moveTo + 2;

	lastMousePosition = currentMousePosition;
};

const generalUpdate = () => {
	lastMouseMovement = smoothingOfAnimation(moveTo, lastMouseMovement, 0.3);
	sliderGeneral.style.setProperty("--rotatey", lastMouseMovement + "deg");

	requestAnimationFrame(generalUpdate);
};

const onResize = () => {
	//fetches the properties of the size of the sliderGeneral
	const boundingCarrousel = caraseoulContainer.getBoundingClientRect();

	const propertiesSlider = {
		w: boundingCarrousel.width,
		h: boundingCarrousel.height,
	};

	return propertiesSlider;
};

const startLogicGeneral = () => {
	//event that detects if the mouse is over the General slider
	sliderGeneral.addEventListener("mousedown", () => {
		mouseOn = true;
		sliderGeneral.style.cursor = "grabbing";
	});
	sliderGeneral.addEventListener("mouseup", () => {
		mouseOn = false;
		sliderGeneral.style.cursor = "grab";
	});
	generalContentElement.addEventListener("mouseleave", () => (mouseOn = false));

	sliderGeneral.addEventListener(
		"mousemove",
		(e) => mouseOn && getPosX(e.clientX)
	);

	//event that detects if the mouse is clicking on top of the General slider
	sliderGeneral.addEventListener("touchstart", () => {
		mouseOn = true;
		sliderGeneral.style.cursor = "grabbing";
	});
	sliderGeneral.addEventListener("touchend", () => {
		mouseOn = false;
		sliderGeneral.style.cursor = "grab";
	});
	sliderGeneral.addEventListener(
		"touchmove",
		(e) => mouseOn && getPosX(e.touches[0].clientX)
	);

	window.addEventListener("resize", homeSlider);

	generalUpdate();
	homeSlider();
};

startLogicGeneral();
