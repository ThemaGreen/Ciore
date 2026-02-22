document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-in').forEach(el => observer.observe(el));

    // Accordion functionality
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isOpen = item.classList.contains('active');
            
            // Close all
            document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));
            
            if (!isOpen) {
                item.classList.add('active');
            }
        });
    });
});