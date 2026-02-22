document.addEventListener('DOMContentLoaded', () => {
    // Accordion functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isOpen = item.classList.contains('active');
            
            // Close all items in the same accordion
            const parentAccordion = item.parentElement;
            parentAccordion.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));
            
            if (!isOpen) {
                item.classList.add('active');
            }
        });
    });

    // Donation Logic
    const amountButtons = document.querySelectorAll('.amounts button');
    const customAmountInput = document.getElementById('custom-amount');
    const frequencySelect = document.getElementById('frequency');
    const coverFeeCheckbox = document.getElementById('cover-fee');
    const totalDisplay = document.getElementById('total-amount');
    
    let selectedAmount = 1;

    function updateTotal() {
        let amount = parseFloat(selectedAmount);
        if (customAmountInput.value) {
            amount = parseFloat(customAmountInput.value) || 0;
        }

        let total = amount;
        if (coverFeeCheckbox.checked) {
            total = amount + (amount * 0.03);
        }

        const freq = frequencySelect.value === 'one-time' ? '' : 'per month';
        totalDisplay.textContent = `$${total.toFixed(2)}`;
    }

    amountButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            amountButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedAmount = btn.dataset.amount;
            customAmountInput.value = '';
            updateTotal();
        });
    });

    customAmountInput.addEventListener('input', () => {
        amountButtons.forEach(b => b.classList.remove('active'));
        updateTotal();
    });

    coverFeeCheckbox.addEventListener('change', updateTotal);
    frequencySelect.addEventListener('change', updateTotal);

    // Initial state
    amountButtons[0].classList.add('active');
    updateTotal();

    // Scroll Animations
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

    document.querySelectorAll('.animate-in').forEach(el => {
        observer.observe(el);
    });
});
