/**
 * DIJIT Talent Cloud Authentication - Interactive Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- View Management ---
    const views = document.querySelectorAll('.tc-view');
    
    window.switchView = (viewId) => {
        views.forEach(v => v.classList.remove('active'));
        const target = document.getElementById(viewId);
        if (target) {
            target.classList.add('active');
        }
        window.scrollTo(0, 0);
    };

    // --- Signup Selection ---
    const typeCards = document.querySelectorAll('.tc-type-card');
    let selectedUserType = null;

    typeCards.forEach(card => {
        card.addEventListener('click', () => {
            typeCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            selectedUserType = card.dataset.type;
            
            // Wait a moment for visual feedback, then switch to the form
            setTimeout(() => {
                if (selectedUserType === 'company') {
                    switchView('companySignupView');
                } else if (selectedUserType === 'consultancy') {
                    switchView('consultancySignupView');
                }
            }, 300);
        });
    });

    // --- Password Visibility Toggle ---
    const togglePwdIcons = document.querySelectorAll('.tc-toggle-pwd');
    togglePwdIcons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            const input = e.target.previousElementSibling;
            if (input.type === 'password') {
                input.type = 'text';
                e.target.classList.remove('fa-eye-slash');
                e.target.classList.add('fa-eye');
            } else {
                input.type = 'password';
                e.target.classList.remove('fa-eye');
                e.target.classList.add('fa-eye-slash');
            }
        });
    });

    // --- Password Strength Meter ---
    const pwdInputs = document.querySelectorAll('input[type="password"]');
    pwdInputs.forEach(input => {
        input.addEventListener('input', (e) => {
            const val = e.target.value;
            const container = e.target.closest('.tc-form-group').querySelector('.tc-pwd-strength');
            if (!container) return;

            let strength = 0;
            if (val.length >= 8) strength += 1;
            if (/[A-Z]/.test(val)) strength += 1;
            if (/[0-9]/.test(val)) strength += 1;
            if (/[^A-Za-z0-9]/.test(val)) strength += 1;

            container.className = 'tc-pwd-strength'; // reset
            if (val.length === 0) return;
            if (strength <= 1) container.classList.add('weak');
            else if (strength === 2) container.classList.add('fair');
            else if (strength === 3) container.classList.add('good');
            else if (strength >= 4) container.classList.add('strong');
        });
    });

    // --- OTP Segmented Inputs ---
    const otpContainers = document.querySelectorAll('.tc-otp-container');
    otpContainers.forEach(container => {
        const inputs = container.querySelectorAll('.tc-otp-input');
        inputs.forEach((input, index) => {
            input.addEventListener('input', (e) => {
                // Remove non-numeric
                e.target.value = e.target.value.replace(/[^0-9]/g, '');
                if (e.target.value !== '' && index < inputs.length - 1) {
                    inputs[index + 1].focus();
                }
            });
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Backspace' && e.target.value === '' && index > 0) {
                    inputs[index - 1].focus();
                }
            });
        });
    });

    // --- Form Submissions Simulation ---
    // Login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = loginForm.querySelector('button[type="submit"]');
            simulateLoading(btn, () => {
                // If login successful, go to profile completion or dashboard
                switchView('profileCompletionView');
                updateProgress(30); // Start at 30% after signup/first login
            });
        });
    }

    // Company Signup
    const companySignupForm = document.getElementById('companySignupForm');
    if (companySignupForm) {
        companySignupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = companySignupForm.querySelector('button[type="submit"]');
            simulateLoading(btn, () => {
                // Move to OTP step
                switchView('otpView');
                startOtpTimer();
            });
        });
    }

    // Consultancy Signup
    const consultancySignupForm = document.getElementById('consultancySignupForm');
    if (consultancySignupForm) {
        consultancySignupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = consultancySignupForm.querySelector('button[type="submit"]');
            simulateLoading(btn, () => {
                switchView('otpView');
                startOtpTimer();
            });
        });
    }

    // OTP Verify
    const otpVerifyBtn = document.getElementById('otpVerifyBtn');
    if (otpVerifyBtn) {
        otpVerifyBtn.addEventListener('click', (e) => {
            e.preventDefault();
            simulateLoading(otpVerifyBtn, () => {
                switchView('profileCompletionView');
                updateProgress(30);
            });
        });
    }

    // Profile Stage 1 Submit
    const profileStage1Form = document.getElementById('profileStage1Form');
    if (profileStage1Form) {
        profileStage1Form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = profileStage1Form.querySelector('button[type="submit"]');
            simulateLoading(btn, () => {
                updateProgress(60);
                document.getElementById('profileStage1').style.display = 'none';
                document.getElementById('profileStage2').style.display = 'block';
            });
        });
    }

    // Profile Stage 2 Submit
    const profileStage2Form = document.getElementById('profileStage2Form');
    if (profileStage2Form) {
        profileStage2Form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = profileStage2Form.querySelector('button[type="submit"]');
            simulateLoading(btn, () => {
                updateProgress(100);
                btn.innerHTML = '<i class="fas fa-check"></i> Profile Completed!';
                btn.style.background = 'var(--tc-success)';
                setTimeout(() => {
                    alert('Redirecting to Dashboard...');
                    // window.location.href = 'dashboard.html';
                }, 1500);
            });
        });
    }

    // --- Helpers ---
    function simulateLoading(btn, callback) {
        const originalText = btn.innerHTML;
        btn.innerHTML = '<span class="tc-loader"></span>';
        btn.disabled = true;
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.disabled = false;
            callback();
        }, 1500);
    }

    function updateProgress(percent) {
        const fill = document.querySelector('.tc-progress-fill');
        const text = document.getElementById('progressText');
        if (fill) fill.style.width = percent + '%';
        if (text) text.innerText = percent + '% Completed';
    }

    let otpInterval;
    function startOtpTimer() {
        let timeLeft = 60;
        const timerSpan = document.getElementById('otpTimer');
        const resendLink = document.getElementById('resendOtpLink');
        if (!timerSpan) return;
        
        clearInterval(otpInterval);
        resendLink.style.pointerEvents = 'none';
        resendLink.style.color = 'var(--tc-text-muted)';
        
        otpInterval = setInterval(() => {
            timeLeft--;
            timerSpan.innerText = `00:${timeLeft < 10 ? '0'+timeLeft : timeLeft}`;
            if (timeLeft <= 0) {
                clearInterval(otpInterval);
                resendLink.style.pointerEvents = 'auto';
                resendLink.style.color = 'var(--tc-primary)';
                timerSpan.innerText = '';
            }
        }, 1000);
    }
});
