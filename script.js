document.addEventListener('DOMContentLoaded', () => {
    // Accordion functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isOpen = item.classList.contains('active');
            
            // Close all items
            document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));
            
            if (!isOpen) {
                item.classList.add('active');
            }
        });
    });

    // Animation on scroll
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

    // Donation Form Logic
    const amountBtns = document.querySelectorAll('.amounts button');
    const customInput = document.querySelector('.amounts input');
    const totalDisplay = document.getElementById('total-amount');
    const feeCheckbox = document.querySelector('.donation-form input[type="checkbox"]');

    function updateTotal() {
        let base = 0;
        const activeBtn = document.querySelector('.amounts button.active');
        
        if (activeBtn) {
            base = parseFloat(activeBtn.dataset.val);
        } else if (customInput.value) {
            base = parseFloat(customInput.value) || 0;
        }

        let total = base;
        if (feeCheckbox.checked) {
            total = base + (base * 0.03);
        }

        totalDisplay.textContent = `$${total.toFixed(2)}`;
    }

    amountBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            amountBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            customInput.value = '';
            updateTotal();
        });
    });

    customInput.addEventListener('input', () => {
        amountBtns.forEach(b => b.classList.remove('active'));
        updateTotal();
    });

    feeCheckbox.addEventListener('change', updateTotal);
});