const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");
inputName.addEventListener("input", (text) => {
    if (text.currentTarget.value) {
        outputName.textContent = text.currentTarget.value;
    } else {
        outputName.textContent = "Anonymus";
    }
});