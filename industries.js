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









// workflow js

document.addEventListener("DOMContentLoaded", function(){

    const boxes = document.querySelectorAll(".challenge-box");

    if("IntersectionObserver" in window){

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if(entry.isIntersecting){
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }

            });

        }, { threshold: 0.1 });

        boxes.forEach(box => observer.observe(box));

    } else {

        // Fallback if observer not supported
        boxes.forEach(box => {
            box.classList.add("show");
        });

    }

});









// industries hero js

const expObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.exp-reveal').forEach(item => {
    expObserver.observe(item);
});








const chObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.ch-reveal').forEach(el => chObserver.observe(el));







// our solutions js

const ind_observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.ind-reveal').forEach(el => ind_observer.observe(el));