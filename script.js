document.addEventListener('DOMContentLoaded', () => {
    // Initialize EmailJS with your User ID
    emailjs.init('Uw_ghGZEZ0Zq3eQLC');  // Your EmailJS User ID

    // Handle Subscribe form submission
    document.getElementById('subscribeForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Send email using EmailJS
        emailjs.sendForm('service_xmu5ag5', 'template_cg7nxik', this)
            .then(() => {
                const thankYouElement = document.querySelector('.thank-you');
                thankYouElement.style.display = 'block';
                setTimeout(() => {
                    thankYouElement.style.display = 'none';
                }, 5000);  // Hides the message after 5 seconds
                this.reset();  // Clear the form
            }, (error) => {
                console.error('Failed to send email. Error: ', error);
            });
    });

    // Handle Send a Message form submission
    document.getElementById('messageForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Send email using EmailJS
        emailjs.sendForm('service_xmu5ag5', 'template_cg7nxik', this)
            .then(() => {
                const thankYouMessageElement = document.querySelector('.thank-you-message');
                thankYouMessageElement.style.display = 'block';
                setTimeout(() => {
                    thankYouMessageElement.style.display = 'none';
                }, 5000);  // Hides the message after 5 seconds
                this.reset();  // Clear the form
            }, (error) => {
                console.error('Failed to send email. Error: ', error);
            });
    });
});
