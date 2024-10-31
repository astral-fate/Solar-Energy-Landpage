// Add smooth scroll behavior for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add hover effect for buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.opacity = '0.9';
    });
    button.addEventListener('mouseout', () => {
        button.style.opacity = '1';
    });
});


const navButtons = document.querySelectorAll('.nav-button');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

navButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Simple navigation animation
        currentSlide = index === 0 
            ? Math.max(0, currentSlide - 1)
            : Math.min(dots.length - 1, currentSlide + 1);
        
        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentSlide);
        });
    });
});
