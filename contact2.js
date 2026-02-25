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








// hero js

const initInfiniteChart = () => {
    const card = document.querySelector('.support-card');
    const bars = card.querySelectorAll('.bar');

     bars.forEach(bar => {
        const targetHeight = bar.style.height;
        bar.style.setProperty('--target-height', targetHeight);
        bar.style.height = '0'; 
    });

    const startLiveMonitoring = () => {
        card.classList.add('active');

         setInterval(() => {
            bars.forEach(bar => {
                 const baseHeight = parseInt(bar.style.getPropertyValue('--target-height'));
                 const jitter = Math.floor(Math.random() * 11) - 5;
                const newHeight = Math.min(Math.max(baseHeight + jitter, 10), 100);
                
                bar.style.setProperty('--target-height', `${newHeight}%`);
            });
        }, 3000);
    };

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            startLiveMonitoring();
            observer.disconnect();
        }
    }, { threshold: 0.5 });

    observer.observe(card);
};

document.addEventListener('DOMContentLoaded', initInfiniteChart);








// contact form js

const form = document.getElementById("itContactForm");

form.addEventListener("submit", function(e) {

    // Let browser handle required validation first
    if (!form.checkValidity()) {
        return;
    }

    e.preventDefault(); // Stop actual submission

    // Clear form fields
    form.reset();

    // Optional: small delay so reset happens smoothly
    setTimeout(() => {
        window.location.href = "./error.html"; // change to your page
    }, 500);

});