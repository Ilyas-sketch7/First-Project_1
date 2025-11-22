const state = {
    currentView: 'view-registration',
    user: null,
    selectedDestination: null,
    totalAmount: 0,
    bookingDetails: {}
};

const showView = (viewId) => {
    const cleanId = viewId.replace('#', '');
    
    document.querySelectorAll('.view-container').forEach(view => {
        view.classList.remove('active');
    });
    
    const selectedView = document.getElementById(cleanId);
    if (selectedView) {
        selectedView.classList.add('active');
        state.currentView = cleanId;
        updateHeaderNavigation(cleanId);
    }
};

const updateHeaderNavigation = (viewId) => {
    const mainNav = document.getElementById('mainNav');
    if (mainNav) {
        mainNav.style.display = viewId === 'view-blog' ? 'block' : 'none';
    }
};

const resetAllForms = () => {
    const regForm = document.getElementById('regForm');
    if (regForm) {
        regForm.reset();
    }
    
    document.querySelectorAll('.price-option:checked').forEach(checkbox => {
        checkbox.checked = false;
    });
    
    const totalElement = document.getElementById('totalAmount');
    if (totalElement) {
        totalElement.textContent = '₹0';
    }
    
    document.querySelectorAll('.error').forEach(error => {
        error.textContent = '';
    });
    
    state.totalAmount = 0;
    state.selectedDestination = null;
    state.bookingDetails = {};
};

let currentOpenModal = null;
let previouslyFocusedElement = null;

/**
 * @param {string} modalId - The ID of the modal to open (with or without #)
 * @param {Object} options - Optional configuration
 * @param {number} options.autoCloseMs - Auto-close after milliseconds (optional)
 */
const openModal = (modalId, options = {}) => {

    const cleanId = modalId.replace('#', '');
    const modal = document.getElementById(cleanId);
    
    if (!modal) {
        console.warn(`Modal with id "${cleanId}" not found`);
        return;
    }
    

    previouslyFocusedElement = document.activeElement;
    

    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
    

    currentOpenModal = modal;
    

    const firstFocusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (firstFocusable) {
        setTimeout(() => firstFocusable.focus(), 100);
    }
    

    if (options.autoCloseMs && options.autoCloseMs > 0) {
        setTimeout(() => {
            closeModal(cleanId);
        }, options.autoCloseMs);
    }
};

/**
 * Close a modal and restore focus
 * @param {string} modalId - The ID of the modal to close (with or without #)
 */
const closeModal = (modalId) => {

    const cleanId = modalId.replace('#', '');
    const modal = document.getElementById(cleanId);
    
    if (!modal) {
        console.warn(`Modal with id "${cleanId}" not found`);
        return;
    }
    

    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
    

    if (currentOpenModal === modal) {
        currentOpenModal = null;
    }
    

    if (previouslyFocusedElement) {
        previouslyFocusedElement.focus();
        previouslyFocusedElement = null;
    }
};

/**
 * Handle escape key press to close modal
 * @param {KeyboardEvent} event - The keyboard event
 */
const handleModalEscape = (event) => {
    if (event.key === 'Escape' && currentOpenModal) {
        const modalId = currentOpenModal.id;
        closeModal(modalId);
    }
};
const setupModalUtilities = () => {

    document.addEventListener('keydown', handleModalEscape);
    

    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal-container');
            if (modal) {
                closeModal(modal.id);
            }
        });
    });
    

    document.querySelectorAll('.modal-close').forEach(button => {
        button.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal-container');
            if (modal) {
                closeModal(modal.id);
            }
        });
    });
};
/**
 * @deprecated Use openModal() instead
 */
function showModal(modalId) {
    openModal(modalId);
}

/**
 * @deprecated Use closeModal() instead
 */
function hideModal(modalId) {
    closeModal(modalId);
}

function showAlert(message, type = 'info') {
    const alertContainer = document.getElementById('alertContainer');
    const alertMessage = document.getElementById('alertMessage');
    const alertContent = alertContainer.querySelector('.alert-content');
    
    if (alertContainer && alertMessage) {
        alertMessage.textContent = message;
        

        const colors = {
            success: '#10b981',
            error: '#ef4444',
            warning: '#f59e0b',
            info: '#3b82f6'
        };
        alertContent.style.borderLeftColor = colors[type] || colors.info;
        
        alertContainer.classList.remove('hidden');
        

        setTimeout(() => {
            alertContainer.classList.add('hidden');
        }, 5000);
    }
}

function showLoading() {
    const spinner = document.getElementById('loadingSpinner');
    if (spinner) {
        spinner.classList.remove('hidden');
    }
}

function hideLoading() {
    const spinner = document.getElementById('loadingSpinner');
    if (spinner) {
        spinner.classList.add('hidden');
    }
}
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {

    const digitsOnly = phone.replace(/\D/g, '');

    return digitsOnly.length === 10;
}

function validatePin(pin) {
    return /^\d{6}$/.test(pin);
}

function showError(fieldId, message) {
    const errorElement = document.getElementById(`err-${fieldId}`);
    if (errorElement) {
        errorElement.textContent = message;
    }
}

function clearError(fieldId) {
    const errorElement = document.getElementById(`err-${fieldId}`);
    if (errorElement) {
        errorElement.textContent = '';
    }
}

function clearAllErrors() {
    document.querySelectorAll('.error').forEach(error => {
        error.textContent = '';
    });
}
function handleRegistration(e) {
    e.preventDefault();
    clearAllErrors();
    
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const pin = document.getElementById('pin').value.trim();
    
    let isValid = true;
    

    if (!fullName || fullName.length < 3) {
        showError('fullName', 'Please enter a valid full name (minimum 3 characters)');
        isValid = false;
    }
    

    if (!validateEmail(email)) {
        showError('email', 'Please enter a valid email address');
        isValid = false;
    }
    

    if (!validatePhone(phone)) {
        showError('phone', 'Phone number must be exactly 10 digits');
        showAlert('Phone number must be exactly 10 digits!', 'error');
        isValid = false;
    }
    

    if (!validatePin(pin)) {
        showError('pin', 'PIN must be exactly 6 digits');
        showAlert('PIN must be exactly 6 digits!', 'error');
        isValid = false;
    }
    
    if (isValid) {

        state.user = { fullName, email, phone, pin };
        

        closeModal('registerModal');
        

        showAlert('Registration successful! Welcome to VoyageFlow.', 'success');
        

        handleLogin(email);
        

        setTimeout(() => {
            showView('view-home');
        }, 1500);
    }
}
function handleDestinationSelect(destination) {
    state.selectedDestination = destination;
    showAlert(`${destination} selected! Proceed to planner to customize your trip.`, 'success');
}
function calculateTotal() {
    const checkboxes = document.querySelectorAll('.price-option:checked');
    let total = 0;
    
    checkboxes.forEach(checkbox => {
        const price = parseInt(checkbox.getAttribute('data-price')) || 0;
        total += price;
    });
    
    state.totalAmount = total;
    

    const totalElement = document.getElementById('totalAmount');
    if (totalElement) {
        totalElement.textContent = `₹${total.toLocaleString('en-IN')}`;
    }
}

function handleConfirmBooking() {
    if (state.totalAmount === 0) {
        showAlert('Please select at least one option to proceed with booking', 'warning');
        return;
    }
    

    const selectedOptions = {
        travel: [],
        food: [],
        activities: []
    };
    
    document.querySelectorAll('.price-option:checked').forEach(checkbox => {
        const name = checkbox.name;
        const text = checkbox.parentElement.querySelector('.option-text').textContent;
        const price = parseInt(checkbox.getAttribute('data-price'));
        
        selectedOptions[name].push({ text, price });
    });
    
    state.bookingDetails = {
        ...selectedOptions,
        total: state.totalAmount,
        destination: state.selectedDestination || 'Selected Destination',
        date: new Date().toLocaleDateString('en-IN'),
        bookingRef: 'VF-' + Math.random().toString(36).substr(2, 6).toUpperCase()
    };
    

    showAlert('Booking confirmed! Explore more destinations.', 'success');
    

    setTimeout(() => {
        showView('view-showcase');
    }, 1500);
}
function updateConfirmationView() {
    const bookingRef = document.getElementById('bookingReference');
    const destination = document.getElementById('confirmedDestination');
    const date = document.getElementById('confirmedDate');
    const total = document.getElementById('confirmedTotal');
    
    if (bookingRef) bookingRef.textContent = state.bookingDetails.bookingRef;
    if (destination) destination.textContent = state.bookingDetails.destination;
    if (date) date.textContent = state.bookingDetails.date;
    if (total) total.textContent = `₹${state.bookingDetails.total.toLocaleString('en-IN')}`;
}

function handleDownloadItinerary() {
    showAlert('Downloading your itinerary...', 'info');

    setTimeout(() => {
        showAlert('Itinerary downloaded successfully!', 'success');
    }, 1500);
}

function handleViewMyTrips() {
    showAlert('My Trips feature coming soon!', 'info');
}

function handlePlanAnother() {

    document.querySelectorAll('.price-option:checked').forEach(checkbox => {
        checkbox.checked = false;
    });
    state.totalAmount = 0;
    state.selectedDestination = null;
    

    showView('view-blog');
}
function handleSmoothScroll(e) {
    const target = e.target;
    if (target.tagName === 'A' && target.getAttribute('href').startsWith('#')) {
        const targetId = target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}
function setupEventListeners() {

    setupModalUtilities();
    

    const regForm = document.getElementById('regForm');
    if (regForm) {
        regForm.addEventListener('submit', handleRegistration);
    }
    

    const proceedToDestinations = document.getElementById('proceedToDestinations');
    if (proceedToDestinations) {
        proceedToDestinations.addEventListener('click', () => {
            closeModal('regSuccessModal');
            showView('view-blog');
        });
    }
    

    document.querySelectorAll('.select-destination').forEach(button => {
        button.addEventListener('click', (e) => {
            const destination = e.target.getAttribute('data-destination');
            handleDestinationSelect(destination);
        });
    });
    

    const toCalculator = document.getElementById('toCalculator');
    if (toCalculator) {
        toCalculator.addEventListener('click', () => {
            showView('view-calculator');
        });
    }
    

    const startOver = document.getElementById('startOver');
    if (startOver) {
        startOver.addEventListener('click', () => {
            resetAllForms();
            showView('view-registration');
        });
    }
    

    document.querySelectorAll('.price-option').forEach(checkbox => {
        checkbox.addEventListener('change', calculateTotal);
    });
    

    const confirmBooking = document.getElementById('confirmBooking');
    if (confirmBooking) {
        confirmBooking.addEventListener('click', handleConfirmBooking);
    }
    

    const downloadItinerary = document.getElementById('downloadItinerary');
    if (downloadItinerary) {
        downloadItinerary.addEventListener('click', handleDownloadItinerary);
    }
    
    const viewMyTrips = document.getElementById('viewMyTrips');
    if (viewMyTrips) {
        viewMyTrips.addEventListener('click', handleViewMyTrips);
    }
    
    const planAnother = document.getElementById('planAnother');
    if (planAnother) {
        planAnother.addEventListener('click', handlePlanAnother);
    }
    

    document.querySelectorAll('.modal-cancel').forEach(button => {
        button.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal-container');
            if (modal) {
                closeModal(modal.id);
            }
        });
    });
    const alertClose = document.querySelector('.alert-close');
    if (alertClose) {
        alertClose.addEventListener('click', () => {
            document.getElementById('alertContainer').classList.add('hidden');
        });
    }
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = e.target.getAttribute('href');
            if (href && href.startsWith('#view-')) {
                e.preventDefault();
                showView(href.substring(1));
            }
        });
    });
    document.addEventListener('click', handleSmoothScroll);
    const fullNameInput = document.getElementById('fullName');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const pinInput = document.getElementById('pin');
    
    if (fullNameInput) {
        fullNameInput.addEventListener('blur', () => {
            const value = fullNameInput.value.trim();
            if (value && value.length < 3) {
                showError('fullName', 'Name must be at least 3 characters');
            } else {
                clearError('fullName');
            }
        });
    }
    
    if (emailInput) {
        emailInput.addEventListener('blur', () => {
            const value = emailInput.value.trim();
            if (value && !validateEmail(value)) {
                showError('email', 'Invalid email format');
            } else {
                clearError('email');
            }
        });
    }
    
    if (phoneInput) {
        phoneInput.addEventListener('blur', () => {
            const value = phoneInput.value.trim();
            if (value && !validatePhone(value)) {
                showError('phone', 'Invalid phone number');
            } else {
                clearError('phone');
            }
        });
    }
    
    if (pinInput) {
        pinInput.addEventListener('blur', () => {
            const value = pinInput.value.trim();
            if (value && !validatePin(value)) {
                showError('pin', 'PIN must be 6 digits');
            } else {
                clearError('pin');
            }
        });
        pinInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\d]/g, '');
        });
    }
    const getStartedBtn = document.getElementById('getStartedBtn');
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', () => {
            if (state.user) {
                showView('view-blog');
            } else {
                showView('view-registration');
            }
        });
    }
    document.querySelectorAll('.btn-city-details').forEach(button => {
        button.addEventListener('click', (e) => {
            const city = e.target.getAttribute('data-city');
            showView(`view-${city}`);
        });
    });
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            showModal('loginModal');
        });
    }
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            handleLogin(email);
        });
    }
    const goToRegister = document.getElementById('goToRegister');
    if (goToRegister) {
        goToRegister.addEventListener('click', (e) => {
            e.preventDefault();
            closeModal('loginModal');
            showModal('registerModal');
        });
    }
    const goToLogin = document.getElementById('goToLogin');
    if (goToLogin) {
        goToLogin.addEventListener('click', (e) => {
            e.preventDefault();
            closeModal('registerModal');
            showModal('loginModal');
        });
    }


    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }


    const hasModifications = document.getElementById('hasModifications');
    if (hasModifications) {
        hasModifications.addEventListener('change', (e) => {
            const modificationDetails = document.getElementById('modificationDetails');
            if (modificationDetails) {
                if (e.target.checked) {
                    modificationDetails.classList.remove('hidden');
                } else {
                    modificationDetails.classList.add('hidden');
                }
            }
        });
    }
}
function handleLogin(email) {

    const userId = 'VF' + Math.random().toString(36).substr(2, 6).toUpperCase();
    
    state.user = {
        email: email,
        userId: userId,
        loggedIn: true
    };
    
    state.isLoggedIn = true;


    document.getElementById('loginBtn').classList.add('hidden');
    document.getElementById('userInfo').classList.remove('hidden');
    document.getElementById('userId').textContent = userId;
    
    closeModal('loginModal');
    showAlert('Login successful! You can now book trips.', 'success');

    showView('view-home');
}
function handleLogout() {
    state.user = null;
    state.isLoggedIn = false;
    state.bookingDetails = {};
    
    document.getElementById('loginBtn').classList.remove('hidden');
    document.getElementById('userInfo').classList.add('hidden');
    document.getElementById('userId').textContent = '';
    

    const tripSummary = document.getElementById('tripSummary');
    if (tripSummary) {
        tripSummary.classList.add('hidden');
    }
    
    showAlert('You have been logged out.', 'info');

    showView('view-home');
}

function selectCityAndPlan(cityName) {

    if (!state.isLoggedIn) {
        showAlert('Please login to book your trip!', 'warning');

        const loginModal = document.getElementById('loginModal');
        if (loginModal) {
            loginModal.classList.remove('hidden');
        }
        return;
    }
    state.selectedDestination = cityName;
    

    state.bookingDetails.destination = cityName;
    state.bookingDetails.status = 'Planning';
    state.bookingDetails.date = new Date().toLocaleDateString();
    

    updateTripSummary();
    
    showView('view-calculator');
    

    setTimeout(() => {
        if (typeof loadCityOptions === 'function') {
            loadCityOptions(cityName);
        }
    }, 200);
    
    showAlert(`Planning trip to ${cityName}!`, 'success');
}


function updateTripSummary() {
    const tripSummary = document.getElementById('tripSummary');
    if (tripSummary && state.bookingDetails.destination) {
        tripSummary.innerHTML = `
            <div class="trip-info">
                <span class="trip-label">📍 Destination:</span>
                <span class="trip-value">${state.bookingDetails.destination}</span>
            </div>
            <div class="trip-info">
                <span class="trip-label">📅 Date:</span>
                <span class="trip-value">${state.bookingDetails.date}</span>
            </div>
            <div class="trip-info">
                <span class="trip-label">📊 Status:</span>
                <span class="trip-status">${state.bookingDetails.status}</span>
            </div>
        `;
        tripSummary.classList.remove('hidden');
    }
}

document.addEventListener('DOMContentLoaded', () => {

    setupEventListeners();
    

    showView('view-home');
    

});
window.selectCityAndPlan = selectCityAndPlan;
window.showView = showView;
