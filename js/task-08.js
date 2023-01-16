const form = document.querySelector('.login-form');

form.addEventListener("submit", onSubmit);

function onSubmit(event) { 
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;
    console.log("email: ", email.value);
    console.log("password: ", password.value);

    if (email.value === '' || password.value === '') { 
        alert("Всі поля мають бути заповнені!");
    }

    form.reset();
}