/**
 * DIJIT Talent Cloud - OTP Input Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    const otpInputs = document.querySelectorAll('.otp-input');

    if (otpInputs.length > 0) {
        otpInputs.forEach((input, index) => {
            input.addEventListener('input', (e) => {
                // Ensure only numbers are entered
                e.target.value = e.target.value.replace(/[^0-9]/g, '');

                if (e.target.value !== '') {
                    // Move to next input if available
                    if (index < otpInputs.length - 1) {
                        otpInputs[index + 1].focus();
                    }
                }
            });

            input.addEventListener('keydown', (e) => {
                // Handle backspace to move to previous input
                if (e.key === 'Backspace' && e.target.value === '') {
                    if (index > 0) {
                        otpInputs[index - 1].focus();
                    }
                }
            });
            
            // Allow paste
            input.addEventListener('paste', (e) => {
                e.preventDefault();
                const pastedData = e.clipboardData.getData('text').replace(/[^0-9]/g, '').split('');
                otpInputs.forEach((input, i) => {
                    if (pastedData[i]) {
                        input.value = pastedData[i];
                        if (i < otpInputs.length - 1) {
                            otpInputs[i + 1].focus();
                        }
                    }
                });
            });
        });
    }
});
