// DOM Elements
const donationTypeRadios = document.querySelectorAll('input[name="donation_type"]');
const pickupAddressSection = document.getElementById('pickupAddressSection');
const donationForm = document.getElementById('donationForm');
const pickupPostalCode = document.getElementById('pickupPostalCode');

// Configuration
const BUSINESS_POSTAL_CODE_PREFIX = '12'; // First two digits of business location postal code
const DATE_TIME_FORMAT = new Intl.DateTimeFormat('de-DE', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
});

// Event Listeners
donationTypeRadios.forEach(radio => {
    radio.addEventListener('change', handleDonationTypeChange);
});

donationForm.addEventListener('submit', handleFormSubmit);

// Functions
function handleDonationTypeChange(event) {
    const selectedType = event.target.value;
    
    if (selectedType === 'collection') {
        pickupAddressSection.classList.remove('hidden');
        // Make address fields required
        document.getElementById('pickupAddress').required = true;
        document.getElementById('pickupPostalCode').required = true;
        document.getElementById('pickupCity').required = true;
    } else {
        pickupAddressSection.classList.add('hidden');
        // Make address fields optional
        document.getElementById('pickupAddress').required = false;
        document.getElementById('pickupPostalCode').required = false;
        document.getElementById('pickupCity').required = false;
        // Clear values
        document.getElementById('pickupAddress').value = '';
        document.getElementById('pickupPostalCode').value = '';
        document.getElementById('pickupCity').value = '';
    }
}

function handleFormSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const donationType = document.querySelector('input[name="donation_type"]:checked').value;
    const clothingType = document.getElementById('clothingType').value;
    const crisisZone = document.getElementById('crisisZone').value;
    
    // Validate clothing type and crisis zone
    if (!clothingType || !crisisZone) {
        alert('Bitte füllen Sie alle erforderlichen Felder aus.');
        return;
    }
    
    let formData = {
        donationType: donationType,
        clothingType: clothingType,
        crisisZone: crisisZone,
        timestamp: new Date(),
        location: ''
    };
    
    // Handle different donation types
    if (donationType === 'collection') {
        const pickupAddress = document.getElementById('pickupAddress').value;
        const pickupPostalCode = document.getElementById('pickupPostalCode').value;
        const pickupCity = document.getElementById('pickupCity').value;
        
        // Validate postal code
        if (!validatePostalCode(pickupPostalCode)) {
            alert(`Entschuldigung, die angegebene Adresse liegt nicht in der Nähe unserer Geschäftsstelle. Die Postleitzahl muss mit "${BUSINESS_POSTAL_CODE_PREFIX}" beginnen.`);
            return;
        }
        
        formData.location = `${pickupAddress}, ${pickupPostalCode} ${pickupCity}`;
        formData.locationType = 'Abholung';
    } else {
        formData.location = 'Geschäftsstelle';
        formData.locationType = 'Persönliche Übergabe';
    }
    
    // Show confirmation page
    showConfirmation(formData);
}

function validatePostalCode(postalCode) {
    if (!postalCode || postalCode.length < 2) {
        return false;
    }
    return postalCode.substring(0, 2) === BUSINESS_POSTAL_CODE_PREFIX;
}

function getClothingTypeLabel(value) {
    const labels = {
        'womens': 'Frauenkleidung',
        'mens': 'Herrenkleidung',
        'kids': 'Kinderkleidung',
        'mixed': 'Gemischte Kleidung'
    };
    return labels[value] || value;
}

function getCrisisZoneLabel(value) {
    const labels = {
        'ukraine': 'Ukraine',
        'syria': 'Syrien',
        'afghanistan': 'Afghanistan',
        'yemen': 'Jemen',
        'other': 'Sonstiges'
    };
    return labels[value] || value;
}

function showConfirmation(formData) {
    const mainContent = document.querySelector('.donation-section');
    const confirmationHTML = `
        <div class="confirmation-page">
            <h3>✓ Spende erfolgreich registriert!</h3>
            <p>Vielen Dank für Ihre Großzügigkeit. Hier sind die Details Ihrer Registrierung:</p>
            
            <div class="confirmation-details">
                <div class="detail-row">
                    <span class="detail-label">Art der Kleidung:</span>
                    <span class="detail-value">${getClothingTypeLabel(formData.clothingType)}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Krisengebiet:</span>
                    <span class="detail-value">${getCrisisZoneLabel(formData.crisisZone)}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Übergabeort:</span>
                    <span class="detail-value">${formData.locationType}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Adresse:</span>
                    <span class="detail-value">${formData.location}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Registriert am:</span>
                    <span class="detail-value">${DATE_TIME_FORMAT.format(formData.timestamp)}</span>
                </div>
            </div>
            
            <button class="btn-new-donation" onclick="location.reload()">Weitere Spende registrieren</button>
        </div>
    `;
    
    // Replace form with confirmation
    mainContent.innerHTML = confirmationHTML;
    
    // Scroll to confirmation
    document.querySelector('.content-area').scrollIntoView({ behavior: 'smooth' });
}

// Initialize
function init() {
    // Set initial state (hide pickup address section by default)
    handleDonationTypeChange({ target: document.querySelector('input[name="donation_type"]:checked') });
}

// Run on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}