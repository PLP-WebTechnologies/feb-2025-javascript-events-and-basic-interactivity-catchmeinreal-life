// Reference form elements
const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const contactMethodInput = document.getElementById('contactMethod');
const termsInput = document.getElementById('terms');

// Reference for displaying errors
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const contactMethodError = document.getElementById('contactMethodError');
const termsError = document.getElementById('termsError');

// Reference for confirmation message
const confirmationMessage = document.getElementById('confirmationMessage');

// Reference for displaying form summary
const summaryName = document.getElementById('summaryName');
const summaryEmail = document.getElementById('summaryEmail');
const summaryContactMethod = document.getElementById('summaryContactMethod');
const summaryTerms = document.getElementById('summaryTerms');

// Event listener for real-time validation and feedback
form.addEventListener('input', () => {
    validateForm();
    updateSummary();
});

// Event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
    if (validateForm()) {
        displayConfirmation();
    }
});

// Function to validate form fields
function validateForm() {
    let valid = true;

    // Validate name field
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Name is required.';
        valid = false;
    } else {
        nameError.textContent = '';
    }

    // Validate email field
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = 'Please enter a valid email.';
        valid = false;
    } else {
        emailError.textContent = '';
    }

    // Validate preferred contact method
    if (contactMethodInput.value === '') {
        contactMethodError.textContent = 'Please select a contact method.';
        valid = false;
    } else {
        contactMethodError.textContent = '';
    }

    // Validate terms acceptance
    if (!termsInput.checked) {
        termsError.textContent = 'You must accept the terms and conditions.';
        valid = false;
    } else {
        termsError.textContent = '';
    }

    return valid;
}

// Function to update form summary dynamically
function updateSummary() {
    summaryName.textContent = nameInput.value || 'N/A';
    summaryEmail.textContent = emailInput.value || 'N/A';
    summaryContactMethod.textContent = contactMethodInput.value || 'N/A';
    summaryTerms.textContent = termsInput.checked ? 'Yes' : 'No';
}

// Function to display confirmation message
function displayConfirmation() {
    confirmationMessage.textContent = 'Form submitted successfully!';
    confirmationMessage.className = 'success';
}
