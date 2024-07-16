const inputRange = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");
const fontSizeChanging = (event) => {
	spanText.style.fontSize = `${event.target.value}px`;
};

inputRange.addEventListener("input", fontSizeChanging);