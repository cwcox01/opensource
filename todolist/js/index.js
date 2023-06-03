// selecting the li items on page

let myListItems = document.getElementsByTagName("li");

// looping through all li items

for (i = 0; i < myListItems.length; i++) {
	let spanCreate = document.createElement("span");
	let text = document.createTextNode("\u00D7");
	spanCreate.className = "close";
	spanCreate.appendChild(text);
	myListItems[i].appendChild(spanCreate);
}

// closing items on page

let close = document.getElementsByClassName("close");

for (i = 0; i < close.length; i++) {
	close[i].onclick = function () {
		var div = this.parentElement;
		div.style.display = "none";
	};
}

// function to add item to do list

function items() {
	const addItemLi = document.createElement("li");
	const inputValue = document.querySelector(".itemAdd").value;
	const itemText = document.createTextNode(inputValue);
	addItemLi.appendChild(itemText);
	const listElement = document.querySelector("ul");
	listElement.appendChild(addItemLi);
	document.querySelector(".itemAdd").value = "";
	if (inputValue === "") {
		alert("Please enter an item to complete.");
		addItemLi.style.display = "none";
	}
	let spanCreate = document.createElement("span");
	const text = document.createTextNode("\u00D7");
	spanCreate.className = "close";
	spanCreate.appendChild(text);
	addItemLi.appendChild(spanCreate);
	spanCreate.onclick = () => {
		for (i = 0; i < close.length; i++) {
			close[i].onclick = function () {
				var div = this.parentElement;
				div.style.display = "none";
			};
		}
	};
}

// adding event listener to check an item off

let list = document.querySelector("ul");

list.addEventListener("click", function (ev) {
	if (ev.target.tagName === "LI") {
		ev.target.classList.toggle("checked");
	}
});
