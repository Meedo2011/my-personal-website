document.addEventListener('DOMContentLoaded', () => {
    // Initialize EmailJS with your User ID
    emailjs.init('YOUR_USER_ID');  // Replace with your EmailJS User ID

    // Handle Subscribe form submission
    document.getElementById('subscribeForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Send email using EmailJS
        emailjs.sendForm('service_xmu5ag5', 'YOUR_SUBSCRIBE_TEMPLATE_ID', this)
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
        emailjs.sendForm('service_xmu5ag5', 'YOUR_MESSAGE_TEMPLATE_ID', this)
            .then(() => {
                document.querySelector('.thank-you-message').style.display = 'block';
                this.reset();  // Clear the form
            }, (error) => {
                console.error('Failed to send email. Error: ', error);
            });
    });
});
