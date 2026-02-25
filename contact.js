// loader js 

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.style.display = "none";
    }, 5000); // 10000ms = 10 seconds
});






// hamburger js 

const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
});







// 404 error js

const form = document.getElementById("contactForm");
 
form.addEventListener("submit", function(e){

    e.preventDefault(); 

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

     const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(name === "" || email === "" || message === ""){
        alert("Please fill all the fields properly!");
        return;
    }

    if(!email.match(emailPattern)){
        alert("Please enter a valid email address!");
        return;
    }

     form.reset();

     window.location.href = "./404.html";

});






