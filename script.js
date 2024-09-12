document.addEventListener('DOMContentLoaded', () => {
    // Initialize EmailJS with your Public User ID
    emailjs.init('Uw_ghGZEZ0Zq3eQLC');  // Replace with your EmailJS Public User ID

    // Handle Subscribe form submission
    document.getElementById('subscribeForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Send email using EmailJS
        emailjs.sendForm('service_xmu5ag5', 'template_izg9kmt', this)
            .then(() => {
                document.querySelector('.thank-you').style.display = 'block';
                this.reset();  // Clear the form
            }, (error) => {
                console.error('Failed to send email. Error: ', error);
            });
    });

    // Handle Send a Message form submission
    document.getElementById('messageForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Send email using EmailJS
        emailjs.sendForm('service_xmu5ag5', 'template_izg9kmt', this)
            .then(() => {
                document.querySelector('.thank-you-message').style.display = 'block';
                this.reset();  // Clear the form
            }, (error) => {
                console.error('Failed to send email. Error: ', error);
            });
    });
});
