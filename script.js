document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
});

document.getElementById('verPromocion').addEventListener('click', function() {
    alert('¡Promoción válida hasta el 31 de diciembre!');
});
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
});
