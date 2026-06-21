/**
 * DIJIT Talent Cloud - Form Validation
 */

const Validation = {

  isEmail: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()),

  isPasswordStrong: (password) =>
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password),

  isNotEmpty: (value) => value.trim().length > 0,

  isURL: (value) => {
    try { new URL(value); return true; } catch { return false; }
  },

  /**
   * Show an error on an input element
   */
  showError(input, message) {
    this.clearError(input);
    input.classList.add('is-error');
    input.setAttribute('aria-invalid', 'true');
    input.setAttribute('aria-describedby', input.id + '-error');

    const error = document.createElement('p');
    error.id        = input.id + '-error';
    error.className = 'field-error';
    error.setAttribute('role', 'alert');
    error.innerHTML = `<i class="ph ph-warning-circle" aria-hidden="true"></i> ${message}`;
    input.parentNode.insertBefore(error, input.nextSibling);
  },

  /**
   * Clear errors from an input element
   */
  clearError(input) {
    input.classList.remove('is-error');
    input.removeAttribute('aria-invalid');
    input.removeAttribute('aria-describedby');
    const errorEl = document.getElementById(input.id + '-error');
    errorEl?.remove();
  },

  /**
   * Mark input as valid
   */
  showSuccess(input) {
    this.clearError(input);
    input.classList.add('is-success');
  },

  /**
   * Live validation helper — attach to blur events
   */
  attachLiveValidation(form) {
    form.querySelectorAll('.form-input[required]').forEach(input => {
      input.addEventListener('blur', () => {
        if (!this.isNotEmpty(input.value)) {
          this.showError(input, 'This field is required.');
        } else {
          this.showSuccess(input);
        }
      });
    });
  }

};
