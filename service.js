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








// service js

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content-box");

tabs.forEach(tab => {

    tab.addEventListener("mouseenter", () => {

        tabs.forEach(t => t.classList.remove("active"));
        contents.forEach(c => c.classList.remove("active"));

        tab.classList.add("active");

        const target = document.getElementById(tab.dataset.tab);
        target.classList.add("active");

    });

});










// const cards = document.querySelectorAll(".service-card");

// cards.forEach(card => {
//     card.addEventListener("click", function() {
//         this.classList.toggle("active");
//     });
// });