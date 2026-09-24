const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // animate once, then stop watching
        }
    });
}, { threshold: 0.15 });

revealElements.forEach((el) => observer.observe(el));