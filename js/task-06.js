const input = document.querySelector('#validation-input');
const length = Number(input.dataset.length);

console.log(length);

input.addEventListener("blur", () => { 
    if (input.value.length == length) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    }else{
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
})