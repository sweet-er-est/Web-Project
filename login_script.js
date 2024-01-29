document.addEventListener("DOMContentLoaded", function () {
    const signUpForm = document.querySelector(".form-container.sign-up form");
    const signInForm = document.querySelector(".form-container.sign-in form");

    function validateEmail(email) {
        
        return /\S+@\S+\.\S+/.test(email);
    }

    function validatePassword(password) {
        
        return /^(?=.*[A-Z])(?=.*\d)/.test(password);
    }

    function validateForm(form) {
        const nameInput = form.querySelector('input[type="text"]');
        const emailInput = form.querySelector('input[type="email"]');
        const passwordInput = form.querySelector('input[type="password"]');

        if (nameInput && emailInput && passwordInput) {
            const name = nameInput.value;
            const email = emailInput.value;
            const password = passwordInput.value;

            if (name === "" || email === "" || password === "") {
                alert("Please fill in all fields.");
                return false;
            }

            if (!validateEmail(email)) {
                alert("Invalid email address.");
                return false;
            }

            if (!validatePassword(password)) {
                alert("Password should contain at least one capital letter and one number.");
                return false;
            }

            return true;
        }

        return false;
    }

    function handleFormSubmit(event) {
        if (!validateForm(event.target)) {
            event.preventDefault(); 
        }
    }

    if (signUpForm) {
        signUpForm.addEventListener("submit", handleFormSubmit);
    }

    if (signInForm) {
        signInForm.addEventListener("submit", handleFormSubmit);
    }
});


const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
