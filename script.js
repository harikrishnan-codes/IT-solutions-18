// loader js 

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.style.display = "none";
    }, 5000); // 10000ms = 10 seconds
});













// ================= HAMBURGER =================

const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
});


// Close menu when clicking link (Better UX)

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});


// ================= MOBILE DROPDOWN =================

const dropdown = document.querySelector(".dropdown");

dropdown.addEventListener("click", () => {
    dropdown.classList.toggle("open");
});

// hamburger js 

// const hamburger = document.getElementById("hamburger");
// const nav = document.querySelector(".nav");

// hamburger.addEventListener("click", () => {
//     nav.classList.toggle("active");
// });























// hero js

const text = "Website Template for IT Solutions and Services...";
const typingElement = document.getElementById("typing");

let index = 0;

function typeEffect() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}

typeEffect();




// hero image rotation js 

const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const img3 = document.querySelector(".img3");

function rotateImages() {

    // Temporarily store class names
    let class1 = img1.className;
    let class2 = img2.className;
    let class3 = img3.className;

    // Rotate class positions
    img1.className = class3; // third -> first
    img2.className = class1; // first -> second
    img3.className = class2; // second -> third
}

// Run every 3 seconds
setInterval(rotateImages, 2000);








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










// testimonial js 

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;

        const increment = target / 200;

        if (current < target) {
            counter.innerText = Math.ceil(current + increment);
            setTimeout(updateCounter, 10);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
});










// FAQ js

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

