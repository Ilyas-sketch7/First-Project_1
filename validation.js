const ValidationRules = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^\d{10}$/,
    pin: /^\d{6}$/,
    minNameLength: 2
};

const showFieldError = (fieldId, message) => {
    const errorElement = document.getElementById(`err-${fieldId}`);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('visible');
    }
};

const hideFieldError = (fieldId) => {
    const errorElement = document.getElementById(`err-${fieldId}`);
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.classList.remove('visible');
    }
};

const clearAllFieldErrors = () => {
    document.querySelectorAll('.error').forEach(error => {
        error.textContent = '';
        error.classList.remove('visible');
    });
};

const validateFullName = (name) => {
    if (!name || name.trim().length === 0) {
        showFieldError('fullName', 'Full name is required');
        return false;
    }
    
    if (name.trim().length < ValidationRules.minNameLength) {
        showFieldError('fullName', `Name must be at least ${ValidationRules.minNameLength} characters`);
        return false;
    }
    
    hideFieldError('fullName');
    return true;
};

const validateEmail = (email) => {
    if (!email || email.trim().length === 0) {
        showFieldError('email', 'Email is required');
        return false;
    }
    
    if (!ValidationRules.email.test(email.trim())) {
        showFieldError('email', 'Please enter a valid email address');
        return false;
    }
    
    hideFieldError('email');
    return true;
};

const validatePhone = (phone) => {
    const digitsOnly = phone.replace(/\D/g, '');
    
    if (!phone || phone.trim().length === 0) {
        showFieldError('phone', 'Phone number is required');
        return false;
    }
    
    if (!ValidationRules.phone.test(digitsOnly)) {
        showFieldError('phone', 'Phone number must be exactly 10 digits');
        return false;
    }
    
    hideFieldError('phone');
    return true;
};

const validatePIN = (pin) => {
    if (!pin || pin.trim().length === 0) {
        showFieldError('pin', 'PIN is required');
        return false;
    }
    
    if (!ValidationRules.pin.test(pin.trim())) {
        showFieldError('pin', 'PIN must be exactly 6 digits');
        return false;
    }
    
    hideFieldError('pin');
    return true;
};

const showSuccessModal = () => {
    const modal = document.getElementById('regSuccessModal');
    if (modal) {
        modal.classList.remove('hidden');
        modal.setAttribute('aria-hidden', 'false');
    }
};

const hideSuccessModal = () => {
    const modal = document.getElementById('regSuccessModal');
    if (modal) {
        modal.classList.add('hidden');
        modal.setAttribute('aria-hidden', 'true');
    }
};

const validateRegistration = (event) => {
    event.preventDefault();
    clearAllFieldErrors();
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const pin = document.getElementById('pin').value;
    
    const isNameValid = validateFullName(fullName);
    const isEmailValid = validateEmail(email);
    const isPhoneValid = validatePhone(phone);
    const isPINValid = validatePIN(pin);
    const isFormValid = isNameValid && isEmailValid && isPhoneValid && isPINValid;
    
    if (isFormValid) {
        const userData = {
            fullName: fullName.trim(),
            email: email.trim(),
            phone: phone.trim(),
            pin: pin.trim(),
            registrationDate: new Date().toISOString()
        };
        
        sessionStorage.setItem('voyageFlowUser', JSON.stringify(userData));
        showSuccessModal();
        
        setTimeout(() => {
            hideSuccessModal();
            if (typeof showView === 'function') {
                showView('view-blog');
            }
        }, 1200);
    } else {
        const firstError = document.querySelector('.error.visible');
        if (firstError) {
            const fieldId = firstError.id.replace('err-', '');
            const field = document.getElementById(fieldId);
            if (field) {
                field.focus();
            }
        }
    }
};

const setupRealtimeValidation = () => {
    const fullNameInput = document.getElementById('fullName');
    if (fullNameInput) {
        fullNameInput.addEventListener('blur', () => {
            const value = fullNameInput.value;
            if (value) validateFullName(value);
        });
        
        fullNameInput.addEventListener('focus', () => {
            hideFieldError('fullName');
        });
    }
    
    const emailInput = document.getElementById('email');
    if (emailInput) {
        emailInput.addEventListener('blur', () => {
            const value = emailInput.value;
            if (value) validateEmail(value);
        });
        
        emailInput.addEventListener('focus', () => {
            hideFieldError('email');
        });
    }
    
    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\d]/g, '');
        });
        
        phoneInput.addEventListener('blur', () => {
            const value = phoneInput.value;
            if (value) validatePhone(value);
        });
        
        phoneInput.addEventListener('focus', () => {
            hideFieldError('phone');
        });
    }
    
    const pinInput = document.getElementById('pin');
    if (pinInput) {
        pinInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\d]/g, '');
            if (e.target.value.length > 6) {
                e.target.value = e.target.value.slice(0, 6);
            }
        });
        
        pinInput.addEventListener('blur', () => {
            const value = pinInput.value;
            if (value) validatePIN(value);
        });
        
        pinInput.addEventListener('focus', () => {
            hideFieldError('pin');
        });
    }
};

const initializeValidation = () => {
    const regForm = document.getElementById('regForm');
    
    if (regForm) {
        regForm.addEventListener('submit', validateRegistration);
        setupRealtimeValidation();
    }
};

document.addEventListener('DOMContentLoaded', () => {
    initializeValidation();
});