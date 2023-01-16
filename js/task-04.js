let counterValue = 0;
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
decrement.addEventListener("click", () => {
    counterValue -= 1;
    document.querySelector('#value').textContent = counterValue;
})

increment.addEventListener("click", () => {
    counterValue += 1;
    document.querySelector('#value').textContent = counterValue;
})