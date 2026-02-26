// ===============================
// SECTION SWITCHING
// ===============================

function showSignup() {
    document.querySelector(".login").style.display = "none";
    document.querySelector(".forgot-section").style.display = "none";
    document.querySelector(".signup").style.display = "block";
    clearErrors();
}

function showLogin() {
    document.querySelector(".signup").style.display = "none";
    document.querySelector(".forgot-section").style.display = "none";
    document.querySelector(".login").style.display = "block";
    clearErrors();
}

function showForgot() {
    document.querySelector(".login").style.display = "none";
    document.querySelector(".signup").style.display = "none";
    document.querySelector(".forgot-section").style.display = "block";
    clearErrors();
}


// ===============================
// CLEAR ERROR MESSAGES
// ===============================

function clearErrors() {
    const errors = document.querySelectorAll(".error");
    errors.forEach(error => error.innerText = "");
}


// ===============================
// FORM VALIDATION
// ===============================

function validateForm(fields, errorId) {
    let valid = true;

    fields.forEach(id => {
        const input = document.getElementById(id);

        if (!input || input.value.trim() === "") {
            valid = false;
        }
    });

    const errorElement = document.getElementById(errorId);

    if (!valid) {
        errorElement.innerText = "Please fill valid data";
    } else {
        errorElement.innerText = "";
        errorElement.style.color = "green";
        errorElement.innerText = "Form Submitted Successfully ✅";

        setTimeout(function () {
            window.location.href = "404.html";
        }, 1000);
    }
}


// ===============================
// FORM SUBMIT EVENTS
// ===============================

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    validateForm(["loginEmail", "loginPassword"], "loginError");
});

document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
    validateForm(["signupName", "signupEmail", "signupPassword"], "signupError");
});

document.getElementById("forgotForm").addEventListener("submit", function (e) {
    e.preventDefault();
    validateForm(["forgotEmail"], "forgotError");
});


// ===============================
// PASSWORD TOGGLE FUNCTION
// ===============================

document.querySelectorAll(".toggle-password").forEach(function (icon) {

    icon.addEventListener("click", function () {

        const input = this.parentElement.querySelector("input");

        if (input.type === "password") {
            input.type = "text";
            this.classList.remove("fa-eye");
            this.classList.add("fa-eye-slash");
        } else {
            input.type = "password";
            this.classList.remove("fa-eye-slash");
            this.classList.add("fa-eye");
        }

    });

});