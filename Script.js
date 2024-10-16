// script.js

// Select the burger menu and navigation links
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

// Toggle the 'active' class on the nav links when the burger is clicked
burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Select the back to top button
const backToTopButton = document.getElementById('backToTop');

// Show or hide the button based on scroll position
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = 'block'; // Show button
    } else {
        backToTopButton.style.display = 'none'; // Hide button
    }
});

// Scroll to the top when the button is clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll effect
    });
});

// Slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll('.slide');
    
    slides.forEach((slide) => {
        slide.style.opacity = 0; // Hide all slides
    });
    
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; } // Loop back to the first slide
    
    slides[slideIndex - 1].style.opacity = 1; // Show the current slide
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Contact form functionality
const contactForm = document.getElementById('contactForm');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

// Handle form submission
contactForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission
    popup.style.display = 'flex'; // Show the popup
});

// Close the popup when the close button is clicked
closePopup.addEventListener('click', () => {
    popup.style.display = 'none'; // Hide the popup
});
