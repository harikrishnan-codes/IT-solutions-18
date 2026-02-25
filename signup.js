// form js 

function showSignup() {
    document.querySelector(".login").style.display = "none";
    document.querySelector(".forgot-section").style.display = "none";
    document.querySelector(".signup").style.display = "block";
}

function showLogin() {
    document.querySelector(".signup").style.display = "none";
    document.querySelector(".forgot-section").style.display = "none";
    document.querySelector(".login").style.display = "block";
}

function showForgot() {
    document.querySelector(".login").style.display = "none";
    document.querySelector(".signup").style.display = "none";
    document.querySelector(".forgot-section").style.display = "block";
}

function validateAndRedirect(fields, errorId) {
    let valid = true;
    fields.forEach(id => {
        if (document.getElementById(id).value === "") {
            valid = false;
        }
    });
    if (!valid) {
        document.getElementById(errorId).innerText = "Please fill valid data";
    } else {
        window.location.href = "404.html";
    }
}

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    validateAndRedirect(["loginEmail", "loginPassword"], "loginError");
});

document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
    validateAndRedirect(["signupName", "signupEmail", "signupPassword"], "signupError");
});

document.getElementById("forgotForm").addEventListener("submit", function (e) {
    e.preventDefault();
    validateAndRedirect(["forgotEmail"], "forgotError");
});








const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("loginPassword");

togglePassword.addEventListener("click", function () {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");
});