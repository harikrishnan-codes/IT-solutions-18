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







// testimonial js

 const cards = document.querySelectorAll(".testimonial-card");

let current = 0;

function updateSlider(){

    cards.forEach(card => {
        card.classList.remove("active","left","right");
    });

    let prev = (current - 1 + cards.length) % cards.length;
    let next = (current + 1) % cards.length;

    cards[current].classList.add("active");
    cards[prev].classList.add("left");
    cards[next].classList.add("right");

    current = next;
}

updateSlider();
setInterval(updateSlider, 3000);
