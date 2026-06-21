/**
 * DIJIT Talent Cloud - Dashboard Logic
 */

// Placeholder for dashboard specific initializations (e.g., Chart.js setup)
document.addEventListener('DOMContentLoaded', () => {
    // Example: Animate progress bars on load
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const targetWidth = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.transition = 'width 1s cubic-bezier(0.4, 0, 0.2, 1)';
            bar.style.width = targetWidth;
        }, 300);
    });
});
