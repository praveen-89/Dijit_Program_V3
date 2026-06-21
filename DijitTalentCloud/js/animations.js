/**
 * DIJIT Talent Cloud - Scroll and Interaction Animations
 */

document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add staggered animation classes if elements don't have them but should animate on scroll
                entry.target.classList.add('animate-slide-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elements that should animate on scroll could be targeted here
    // Example: document.querySelectorAll('.scroll-animate').forEach(el => observer.observe(el));
});
