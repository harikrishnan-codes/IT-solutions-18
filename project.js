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







// roadmap js

document.addEventListener("DOMContentLoaded", () => {
    const steps = document.querySelectorAll('.roadmap-step');
    const glow = document.getElementById('lineGlow');
    const container = document.getElementById('roadmapContainer');
    let index = 0;

    function animateProcess() {
        // Reset all steps
        steps.forEach(s => s.classList.remove('active'));
        
        // Activate current step
        const current = steps[index];
        current.classList.add('active');

        // Calculate how far the line should grow
        // It reaches the vertical center of the current step's number
        const stepTop = current.offsetTop;
        const stepMid = current.querySelector('.step-number').offsetHeight / 2;
        const containerHeight = container.offsetHeight;
        
        const percentage = ((stepTop + stepMid) / containerHeight) * 100;
        glow.style.height = `${percentage}%`;

        // Move to next step, or loop back to start
        index = (index + 1) % steps.length;
    }

    // Run every 3 seconds
    setInterval(animateProcess, 3000);
    
    // Initial call
    animateProcess();
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