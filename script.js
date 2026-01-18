 document.addEventListener('DOMContentLoaded', function() {
    // Automatically set the current year in the footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    const contactForm = document.getElementById('contact-form');
    const toast = document.getElementById('submit-message');
    const btn = document.getElementById('submit-btn');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // STOP THE RELOAD
        
        // 1. Visual Feedback
        btn.disabled = true;
        btn.innerText = "Sending...";
        toast.style.display = 'block';
        toast.className = ''; 
        toast.innerText = "Sending your message...";

        // 2. Send data in the background
        fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        })
        .then(response => {
        // 3. Success State
        toast.classList.add('success');
        toast.innerText = "✓ Sent! Check your inbox shortly.";
        contactForm.reset();
        })
        .catch(error => {
        // 4. Error State
        toast.classList.add('error');
        toast.innerText = "Oops! Please try again............";
        })
        .finally(() => {
        // 5. Reset button and hide toast after 5 seconds
        btn.disabled = false;
        btn.innerText = "Send Message";
        setTimeout(() => { toast.style.display = 'none'; }, 5000);
        });
    });



});
        