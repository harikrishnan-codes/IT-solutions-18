// loader js 

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.style.display = "none";
    }, 5000); // 10000ms = 10 seconds
});





// hamburger js

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
});











