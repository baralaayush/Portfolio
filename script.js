 document.addEventListener('DOMContentLoaded', function() {
    // Automatically set the current year in the footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

        const form = document.getElementById('contact-form');
        const submitMessage = document.getElementById('submit-message');

        form.addEventListener('submit', function(e) {
            e.preventDefault(); // Stop the default form submission (page reload)

            const formData = new FormData(form);
            const action = form.getAttribute('action');
            
            // Send the data using Fetch API
            fetch(action, {
                method: 'POST', // Must be POST
                body: formData, // The data to send
                mode: 'no-cors' // Required for cross-origin submission to Apps Script
            })
            .then(response => {
                // Since the script returns a 'Success' message, 
                // we assume success if the request is completed.
                // Reset the form and show a success message
                form.reset(); 
                submitMessage.style.display = 'block'; 
                
                // Hide the message after a few seconds
                setTimeout(() => {
                    submitMessage.style.display = 'none';
                }, 5000); 
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred during submission. Please try again.');
            });
        });



});
        