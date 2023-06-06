const ukConversionRate = 1.34;
const canadaConversionRate = 2.5;
const germanyConversionRate = 5.5;
const mexicoConversionRate = 1.1;
const norwayConversionRate = 2.2;

function convert() {
	const conversionRate = document.querySelector(".conversion-rate");
	const conversionTotal = document.querySelector(".conversion-total");
	let usdAmount = document.querySelector("input").value;
	let selectElementCountry = document.querySelector(
		".country-selection select"
	);
	if (!isNaN(usdAmount)) {
		switch (selectElementCountry.value) {
			case "uk":
				conversionRate.innerHTML = `United Kingdom Rate: ${ukConversionRate}`;
				conversionTotal.innerHTML = ` Your total is: $${(
					usdAmount * ukConversionRate
				).toFixed(2)}`;
				break;
			case "canada":
				conversionRate.innerHTML = `Canada Rate: ${canadaConversionRate}`;
				conversionTotal.innerHTML = `Your total is: $${(
					usdAmount * canadaConversionRate
				).toFixed(2)}`;
				break;
			case "germany":
				conversionRate.innerHTML = `Germany Rate: ${germanyConversionRate}`;
				conversionTotal.innerHTML = `Your total is: $${(
					usdAmount * germanyConversionRate
				).toFixed(2)}`;
				break;
			case "mexico":
				conversionRate.innerHTML = `Mexico Rate: ${mexicoConversionRate}`;
				conversionTotal.innerHTML = `Your total is: $${(
					usdAmount * mexicoConversionRate
				).toFixed(2)}`;
				break;
			case "norway":
				conversionRate.innerHTML = `Norway Rate: ${norwayConversionRate}`;
				conversionTotal.innerHTML = `Your total is: $${(
					usdAmount * norwayConversionRate
				).toFixed(2)}`;
				break;
		}
	} else {
		alert("Please enter a number");
	}
}
