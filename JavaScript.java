document.addEventListener('DOMContentLoaded', function() {
    // Automatically set the current year in the footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Optional: Simple form submission handler (you'll need a backend service for actual email sending)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Thank you for your message! This is a demo. For a real site, you need to integrate a backend service (like Formspree or a server-side script) to process the email.');
            // In a real application, you would send the form data here
            // e.g., using fetch() to post data to an endpoint.
        });
    }
});