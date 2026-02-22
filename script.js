/**
 * CIORÉ™ - Official Website Scripts
 * Interactive components for the site replica
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Accordion Logic ---
  const accordions = document.querySelectorAll('.accordion-btn');

  accordions.forEach(btn => {
    btn.addEventListener('click', () => {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      const targetId = btn.getAttribute('data-target');
      const content = document.getElementById(targetId);
      const icon = btn.querySelector('.accordion-icon');

      // Close others in same group
      const group = btn.closest('.accordion-group');
      const otherBtns = group.querySelectorAll('.accordion-btn');
      otherBtns.forEach(otherBtn => {
        if (otherBtn !== btn) {
          otherBtn.setAttribute('aria-expanded', 'false');
          const otherContent = document.getElementById(otherBtn.getAttribute('data-target'));
          otherContent.classList.remove('open');
          otherBtn.querySelector('.accordion-icon').textContent = '+';
        }
      });

      // Toggle current
      if (isExpanded) {
        btn.setAttribute('aria-expanded', 'false');
        content.classList.remove('open');
        icon.textContent = '+';
      } else {
        btn.setAttribute('aria-expanded', 'true');
        content.classList.add('open');
        icon.textContent = '-';
      }
    });
  });

  // --- Donation Form Logic ---
  const donateForm = document.getElementById('donate-form');
  if (donateForm) {
    const radioInputs = donateForm.querySelectorAll('input[name="amount"]');
    const customAmountWrap = document.getElementById('custom-amount-wrap');
    const customAmountInput = document.getElementById('custom-amount');
    const feeAmount = document.getElementById('fee-amount');
    const totalAmount = document.getElementById('total-amount');
    const coverFeeCheckbox = document.getElementById('cover-fee');
    const frequencySelect = document.getElementById('frequency');
    const frequencyLabel = document.getElementById('frequency-label');

    const updateCalculations = () => {
      let baseAmount = 0;
      const selectedRadio = donateForm.querySelector('input[name="amount"]:checked');

      if (selectedRadio.value === 'custom') {
        customAmountWrap.style.display = 'block';
        baseAmount = parseFloat(customAmountInput.value) || 0;
      } else {
        customAmountWrap.style.display = 'none';
        baseAmount = parseFloat(selectedRadio.value);
      }

      const fee = coverFeeCheckbox.checked ? (baseAmount * 0.03) : 0;
      const total = baseAmount + fee;

      feeAmount.textContent = `$${fee.toFixed(2)}`;
      totalAmount.textContent = `$${total.toFixed(2)}`;

      const freq = frequencySelect.value;
      const freqText = freq === 'one-time' ? 'Total' : `Total per ${freq.replace('ly', '')}`;
      frequencyLabel.textContent = freqText;
    };

    radioInputs.forEach(radio => radio.addEventListener('change', updateCalculations));
    customAmountInput.addEventListener('input', updateCalculations);
    coverFeeCheckbox.addEventListener('change', updateCalculations);
    frequencySelect.addEventListener('change', updateCalculations);
  }
});
