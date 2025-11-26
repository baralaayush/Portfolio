 document.addEventListener('DOMContentLoaded', function() {
    // Automatically set the current year in the footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

        var form = document.getElementById('contact-form');
        form.addEventListener("submit", e => {
            e.preventDefault();
            fetch(form.action, {
                method: "POST",
                body: new FormData(document.getElementById("contact-form")),
            }).then(
                response => response.json()
            ).then((html) => {
                alert('Thank you! I will contact you soon.')
                window.location.href = '';
                location.reload();
            });
        });



});
        