// Below is each function which contains the JS to move the progress bar to the right.  Each function is named move1, move 2, etc all the way to 7.
// We are getting each element by accessing the DOM and using an id for example myBar1 corresponding to bar 1 or myBar2 corresponding to bar 2.

// variable for i to increase slider bar
let i = 0;

// fucntion to move bar 1 when button pressed for bar 1
function move1() {
	if (i == 0) {
		i = 1;
		let elem = document.getElementById("myBar1");
		let width = 10;
		let id = setInterval(frame, 10);
		function frame() {
			if (width >= 100) {
				clearInterval(id);
				i = 0;
			} else {
				width++;
				elem.style.width = width + "%";
			}
		}
	}
}

// fucntion to move bar 2 when button pressed for bar 2
function move2() {
	if (i == 0) {
		i = 1;
		let elem = document.getElementById("myBar2");
		let width = 10;
		let id = setInterval(frame, 10);
		function frame() {
			if (width >= 100) {
				clearInterval(id);
				i = 0;
			} else {
				width++;
				elem.style.width = width + "%";
			}
		}
	}
}

// // fucntion to move bar 3 when button pressed for bar 3
function move3() {
	if (i == 0) {
		i = 1;
		let elem = document.getElementById("myBar3");
		let width = 10;
		let id = setInterval(frame, 10);
		function frame() {
			if (width >= 100) {
				clearInterval(id);
				i = 0;
			} else {
				width++;
				elem.style.width = width + "%";
			}
		}
	}
}

// fucntion to move bar 4 when button pressed for bar 4
function move4() {
	if (i == 0) {
		i = 1;
		let elem = document.getElementById("myBar4");
		let width = 10;
		let id = setInterval(frame, 10);
		function frame() {
			if (width >= 100) {
				clearInterval(id);
				i = 0;
			} else {
				width++;
				elem.style.width = width + "%";
			}
		}
	}
}

// fucntion to move bar 5 when button pressed for bar 5
function move5() {
	if (i == 0) {
		i = 1;
		let elem = document.getElementById("myBar5");
		let width = 10;
		let id = setInterval(frame, 10);
		function frame() {
			if (width >= 100) {
				clearInterval(id);
				i = 0;
			} else {
				width++;
				elem.style.width = width + "%";
			}
		}
	}
}

// fucntion to move bar 6 when button pressed for bar 6
function move6() {
	if (i == 0) {
		i = 1;
		let elem = document.getElementById("myBar6");
		let width = 10;
		let id = setInterval(frame, 10);
		function frame() {
			if (width >= 100) {
				clearInterval(id);
				i = 0;
			} else {
				width++;
				elem.style.width = width + "%";
			}
		}
	}
}

// fucntion to move bar 7 when button pressed for bar 7
function move7() {
	if (i == 0) {
		i = 1;
		let elem = document.getElementById("myBar7");
		let width = 10;
		let id = setInterval(frame, 10);
		function frame() {
			if (width >= 100) {
				clearInterval(id);
				i = 0;
			} else {
				width++;
				elem.style.width = width + "%";
			}
		}
	}
}
