document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const faders = document.querySelectorAll('.fade-in');
function showOnScroll() {
    faders.forEach(el => {
        const top =el.getBoundingClientRect().top;
        const trigger = window.innerHeight - 100;
        if (top < trigger) {
            el.classList.add('show');
        }
    });
}

window.addEventListener('scroll', showOnScroll);
showOnScroll();

document.querySelectorAll('.project-card button .project-card .btn')
