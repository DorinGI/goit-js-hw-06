const incrementingButton = document.querySelector('button[data-action="increment"]');
const decrementButton = document.querySelector('button[data-action="decrement"]');
const counterValue = document.querySelector('#value');
let counterText = counterValue.textContent

incrementingButton.addEventListener("click", () => (counterValue.textContent = ++counterText));
decrementButton.addEventListener("click", () => (counterValue.textContent = --counterText));