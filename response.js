// script.js

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    // Function to toggle navbar visibility on small screens
    const toggleNavbar = () => {
        if (window.innerWidth <= 768) {
            navbar.classList.add('collapsed');
            navLinks.forEach(link => {
                link.style.display = 'block';
            });
        } else {
            navbar.classList.remove('collapsed');
            navLinks.forEach(link => {
                link.style.display = 'inline';
            });
        }
    };

    // Initial check
    toggleNavbar();

    // Check on window resize
    window.addEventListener('resize', toggleNavbar);

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - navbar.offsetHeight,
                behavior: 'smooth'
            });
        });
    });
});
