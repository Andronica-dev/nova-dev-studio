// ============================================
// SMOOTH SCROLL & UTILITIES
// ============================================

function scrollToContact() {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
}

// ============================================
// CONTACT FORM HANDLING
// ============================================

function handleFormSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        business: document.getElementById('business').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value
    };
    
    // PERSONALIZE: Replace with your actual form submission endpoint
    // This could be:
    // 1. A backend API endpoint
    // 2. EmailJS service
    // 3. Formspree
    // 4. Other form handling service
    
    console.log('Form submitted:', formData);
    
    // Show success message (placeholder)
    alert('Thank you! We\'ve received your consultation request. We\'ll be in touch within 24 hours.');
    
    // Reset form
    event.target.reset();
}

// ============================================
// MOBILE MENU TOGGLE (Optional)
// ============================================

// Add this if you want to implement a mobile hamburger menu
// You would need to add a menu button to the HTML first
