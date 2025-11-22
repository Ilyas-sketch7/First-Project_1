let bookingState = {
    destination: '',
    total: 0,
    travel: '',
    food: '',
    activities: '',
    accommodation: '',
    extras: [],
    modifications: ''
};

const cityOptions = {
    paris: {
        travel: [
            { text: 'Economy Flight to Paris', price: 45000, img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=600&fit=crop' },
            { text: 'Business Class to Paris', price: 85000, img: 'https://images.unsplash.com/photo-1517400508447-f8dd518b86db?w=800&h=600&fit=crop' },
            { text: 'Metro Pass (7 days)', price: 2500, img: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=800&h=600&fit=crop' },
            { text: 'Paris Airport Transfer', price: 4000, img: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=600&fit=crop' }
        ],
        food: [
            { text: 'French Café Experience', price: 8000, img: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&h=600&fit=crop' },
            { text: 'Michelin Star Dining', price: 25000, img: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=800&h=600&fit=crop' },
            { text: 'Parisian Bakery Tour', price: 5000, img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop' },
            { text: 'Wine & Cheese Tasting', price: 7000, img: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=800&h=600&fit=crop' }
        ]
    },
    tokyo: {
        travel: [
            { text: 'Economy Flight to Tokyo', price: 42000, img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=600&fit=crop' },
            { text: 'Business Class to Tokyo', price: 80000, img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop' },
            { text: 'JR Pass (7 days)', price: 8000, img: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=800&h=600&fit=crop' },
            { text: 'Tokyo Airport Transfer', price: 3500, img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop' }
        ],
        food: [
            { text: 'Sushi Master Class', price: 12000, img: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&h=600&fit=crop' },
            { text: 'Ramen & Street Food Tour', price: 6000, img: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e?w=800&h=600&fit=crop' },
            { text: 'Traditional Kaiseki Dinner', price: 18000, img: 'https://images.unsplash.com/photo-1580822184713-fc5400e7fe10?w=800&h=600&fit=crop' },
            { text: 'Tokyo Food Market Tour', price: 5500, img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop' }
        ]
    },
    rome: {
        travel: [
            { text: 'Economy Flight to Rome', price: 40000, img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=600&fit=crop' },
            { text: 'Business Class to Rome', price: 75000, img: 'https://images.unsplash.com/photo-1473172707857-f9e276582ab6?w=800&h=600&fit=crop' },
            { text: 'Rome Transit Pass (7 days)', price: 2000, img: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=800&h=600&fit=crop' },
            { text: 'Rome Airport Transfer', price: 3800, img: 'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=800&h=600&fit=crop' }
        ],
        food: [
            { text: 'Pasta Making Class', price: 7000, img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&h=600&fit=crop' },
            { text: 'Roman Trattoria Tour', price: 9000, img: 'https://images.unsplash.com/photo-1533777324565-a040eb52facd?w=800&h=600&fit=crop' },
            { text: 'Italian Wine Tasting', price: 8500, img: 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=800&h=600&fit=crop' },
            { text: 'Pizza & Gelato Tour', price: 5500, img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=600&fit=crop' }
        ]
    },
    bali: {
        travel: [
            { text: 'Economy Flight to Bali', price: 35000, img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=600&fit=crop' },
            { text: 'Business Class to Bali', price: 65000, img: 'https://images.unsplash.com/photo-1583946099379-f9c9cb8bc030?w=800&h=600&fit=crop' },
            { text: 'Scooter Rental (7 days)', price: 3000, img: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=600&fit=crop' },
            { text: 'Bali Airport Transfer', price: 2500, img: 'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=800&h=600&fit=crop' }
        ],
        food: [
            { text: 'Balinese Cooking Class', price: 4500, img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop' },
            { text: 'Beach Club Dining', price: 8000, img: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&h=600&fit=crop' },
            { text: 'Traditional Warung Tour', price: 3500, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop' },
            { text: 'Organic Farm to Table', price: 6000, img: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=800&h=600&fit=crop' }
        ]
    },
    nyc: {
        travel: [
            { text: 'Economy Flight to NYC', price: 50000, img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=600&fit=crop' },
            { text: 'Business Class to NYC', price: 95000, img: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=800&h=600&fit=crop' },
            { text: 'MetroCard (7 days)', price: 4000, img: 'https://images.unsplash.com/photo-1486304873000-235643847519?w=800&h=600&fit=crop' },
            { text: 'NYC Airport Transfer', price: 5000, img: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&h=600&fit=crop' }
        ],
        food: [
            { text: 'NYC Food Tour (Brooklyn)', price: 9000, img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop' },
            { text: 'Fine Dining Manhattan', price: 22000, img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop' },
            { text: 'Pizza & Bagel Tour', price: 6000, img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop' },
            { text: 'Food Truck Experience', price: 4000, img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=600&fit=crop' }
        ]
    }
};

function loadCityOptions(city) {
    const cityKey = city.toLowerCase();
    const options = cityOptions[cityKey];
    
    if (!options) {
        return;
    }
    
    const travelSection = document.querySelector('.options-section:nth-of-type(1) .options-grid');
    if (travelSection && options.travel) {
        travelSection.innerHTML = '';
        options.travel.forEach(option => {
            const label = document.createElement('label');
            label.className = 'option-label';
            label.innerHTML = `
                <input type="checkbox" class="price-option" name="travel" data-price="${option.price}">
                <img class="option-thumb" src="${option.img || ''}" alt="${option.text}">
                <div class="option-body">
                    <div class="option-meta">
                        <span class="option-text">${option.text}</span>
                        <span class="option-price">₹${option.price.toLocaleString('en-IN')}</span>
                    </div>
                </div>
            `;
            travelSection.appendChild(label);
        });
    }
    
    const foodSection = document.querySelector('.options-section:nth-of-type(2) .options-grid');
    if (foodSection && options.food) {
        foodSection.innerHTML = '';
        options.food.forEach(option => {
            const label = document.createElement('label');
            label.className = 'option-label';
            label.innerHTML = `
                <input type="checkbox" class="price-option" name="food" data-price="${option.price}">
                <img class="option-thumb" src="${option.img || ''}" alt="${option.text}">
                <div class="option-body">
                    <div class="option-meta">
                        <span class="option-text">${option.text}</span>
                        <span class="option-price">₹${option.price.toLocaleString('en-IN')}</span>
                    </div>
                </div>
            `;
            foodSection.appendChild(label);
        });
    }
    
    const newCheckboxes = document.querySelectorAll('.price-option');
    newCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', calculateTotal);
    });
    
    bookingState.total = 0;
    const totalElement = document.getElementById('totalAmount');
    if (totalElement) {
        totalElement.textContent = '₹0';
    }
}

function calculateTotal() {
    let total = 0;
    
    bookingState.travel = '';
    bookingState.food = '';
    bookingState.activities = '';
    bookingState.accommodation = '';
    bookingState.extras = [];
    
    const checkboxes = document.querySelectorAll('.price-option:checked');
    
    checkboxes.forEach(checkbox => {
        const price = parseInt(checkbox.getAttribute('data-price')) || 0;
        total += price;
        
        const name = checkbox.name;
        const text = checkbox.parentElement.querySelector('.option-text').textContent;
        
        if (name === 'travel') bookingState.travel = text;
        else if (name === 'food') bookingState.food = text;
        else if (name === 'activities') bookingState.activities = text;
        else if (name === 'accommodation') bookingState.accommodation = text;
        else if (name === 'extras') {
            bookingState.extras.push(text);
        }
    });
    
    if (typeof state !== 'undefined' && state.selectedDestination) {
        bookingState.destination = state.selectedDestination;
    }
    
    const modText = document.getElementById('modificationText');
    if (modText) {
        bookingState.modifications = modText.value;
    }
    
    bookingState.total = total;
    
    const totalElement = document.getElementById('totalAmount');
    if (totalElement) {
        totalElement.textContent = '₹' + total.toLocaleString('en-IN');
    }
    
    console.log('Total calculated:', total, 'Booking state:', bookingState);
}

// Handle confirm booking button click
function handleConfirmBooking() {
    
    if (bookingState.total === 0) {
        alert('Please select at least one option before booking!');
        return;
    }
    
    const modal = document.getElementById('modalContainer');
    const modalMessage = document.getElementById('modalMessage');
    
    if (modal && modalMessage) {
        modalMessage.textContent = `You are about to book a trip to ${bookingState.destination} for ₹${bookingState.total.toLocaleString('en-IN')}. Do you want to proceed?`;
        modal.classList.remove('hidden');
    }
}

function confirmFromModal() {
    const modal = document.getElementById('modalContainer');
    if (modal) {
        modal.classList.add('hidden');
    }
    
    const bookingId = 'VF-' + Date.now().toString(36).toUpperCase();
    const bookingDate = new Date().toLocaleDateString();
    
    const bookingData = {
        ...bookingState,
        bookingId: bookingId,
        bookingDate: bookingDate
    };
    
    sessionStorage.setItem('currentBooking', JSON.stringify(bookingData));
    populateConfirmationPage(bookingData);
    if (typeof showView === 'function') {
        showView('view-booking-confirmation');
    }
    
    if (typeof showAlert === 'function') {
        showAlert('Booking confirmed successfully!', 'success');
    }
}

function cancelFromModal() {
    const modal = document.getElementById('modalContainer');
    if (modal) {
        modal.classList.add('hidden');
    }
}

function populateConfirmationPage(data) {
    const dest = document.getElementById('confirmedDestination');
    if (dest) dest.textContent = data.destination || '-';
    
    const date = document.getElementById('confirmedDate');
    if (date) date.textContent = data.bookingDate || '-';
    
    const id = document.getElementById('bookingId');
    if (id) id.textContent = data.bookingId || '-';
    
    const travel = document.getElementById('confirmedTravel');
    if (travel) travel.textContent = data.travel || '-';
    
    const food = document.getElementById('confirmedFood');
    if (food) food.textContent = data.food || '-';
    
    const activities = document.getElementById('confirmedActivities');
    if (activities) activities.textContent = data.activities || '-';
    
    const accommodation = document.getElementById('confirmedAccommodation');
    if (accommodation) accommodation.textContent = data.accommodation || '-';
    
    if (data.extras && data.extras.length > 0) {
        const extras = document.getElementById('confirmedExtras');
        const extrasRow = document.getElementById('extrasRow');
        if (extras && extrasRow) {
            extras.textContent = data.extras.join(', ');
            extrasRow.style.display = 'flex';
        }
    }
    
    if (data.modifications) {
        const mods = document.getElementById('confirmedModifications');
        const modsRow = document.getElementById('modificationsRow');
        if (mods && modsRow) {
            mods.textContent = data.modifications;
            modsRow.style.display = 'flex';
        }
    }
    
    const total = document.getElementById('confirmedTotal');
    if (total) total.textContent = '₹' + (data.total || 0).toLocaleString('en-IN');
}

document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('.price-option');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', calculateTotal);
    });
    
    const confirmBtn = document.getElementById('confirmBooking');
    if (confirmBtn) {
        confirmBtn.addEventListener('click', handleConfirmBooking);
    }
    
    const modalConfirm = document.getElementById('modalConfirm');
    if (modalConfirm) {
        modalConfirm.addEventListener('click', confirmFromModal);
    }
    
    const modalCancel = document.getElementById('modalCancel');
    if (modalCancel) {
        modalCancel.addEventListener('click', cancelFromModal);
    }
    
    const modalClose = document.querySelector('.modal-close');
    if (modalClose) {
        modalClose.addEventListener('click', cancelFromModal);
    }
    
    const hasModifications = document.getElementById('hasModifications');
    const modificationDetails = document.getElementById('modificationDetails');
    if (hasModifications && modificationDetails) {
        hasModifications.addEventListener('change', function() {
            if (this.checked) {
                modificationDetails.classList.remove('hidden');
            } else {
                modificationDetails.classList.add('hidden');
            }
        });
    }
});

window.handleConfirmBooking = handleConfirmBooking;
window.calculateTotal = calculateTotal;
window.loadCityOptions = loadCityOptions;