// script.js
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Handle dropdowns on mobile
    if (window.innerWidth <= 768) {
        document.querySelectorAll('.dropdown > .nav-link').forEach(link => {
            link.addEventListener('click', function(e) {
                if (this.parentElement.classList.contains('dropdown')) {
                    e.preventDefault();
                    const dropdownMenu = this.nextElementSibling;
                    dropdownMenu.style.display = 
                        dropdownMenu.style.display === 'block' ? 'none' : 'block';
                }
            });
        });
    }
});