// Animated counter effect
let counter = document.getElementById("counter");
let target = 40;
let count = 0;

let interval = setInterval(() => {
    count++;
    counter.textContent = count;

    if (count === target) {
        clearInterval(interval);
    }
}, 40);


// Slight glow pulse effect
setInterval(() => {
    document.querySelector(".divider").classList.toggle("pulse");
}, 1500);


// -------------------------------------------список фільмів

// script.js — анімація появи + легкий ефект на посилання

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.category a');

    links.forEach((link, index) => {
        link.style.opacity = '0';
        link.style.transform = 'translateX(-40px)';

        setTimeout(() => {
            link.style.transition = 'all 0.8s ease';
            link.style.opacity = '1';
            link.style.transform = 'translateX(0)';
        }, 120 + index * 70);
    });

    // Легкий пульсуючий ефект на заголовки при наведенні
    document.querySelectorAll('h2').forEach(h => {
        h.addEventListener('mouseenter', () => {
            h.style.textShadow = '0 0 18px rgba(212, 160, 23, 0.6)';
        });
        h.addEventListener('mouseleave', () => {
            h.style.textShadow = '0 2px 12px rgba(212, 160, 23, 0.4)';
        });
    });
});
