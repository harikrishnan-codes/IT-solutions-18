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









// counter js 

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / 100;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }
    };
    updateCounter();
});









// bar js 

window.addEventListener("load", () => {
    const bars = document.querySelectorAll(".progress-fill");
    bars.forEach(bar => {
        bar.style.width = bar.getAttribute("data-width");
    });
});








// case study js

 const reveals = document.querySelectorAll(".reveal-left, .reveal-right");

function revealOnScroll(){
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);











// process js

 const steps = document.querySelectorAll(".step-card");
let curren = 0;

function highlightStep(){
    steps.forEach(step => step.classList.remove("active"));
    steps[curren].classList.add("active");

    curren++;
    if(curren >= steps.length){
        curren = 0;
    }
}

setInterval(highlightStep, 2000); // change every 2 seconds
 








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









// FAQ js

 const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    item.querySelector(".faq-question").addEventListener("click", () => {

        faqItems.forEach(i => {
            if(i !== item){
                i.classList.remove("active");
            }
        });

        item.classList.toggle("active");
    });
});
  