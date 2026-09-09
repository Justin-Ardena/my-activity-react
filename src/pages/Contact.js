import LandingLayout from '../layouts/LandingLayout';

function Contact() {
    return (
        <LandingLayout>
            <h2>Contact Us</h2>
            <h3>Get In Touch</h3>
            <p>We'd love to hear from you. Reach us through any of the channels below.</p>

            <div className="contact-info">
                <div className="contact-item">
                    <h3>Email</h3>
                    <p>contact@myreactapp.com</p>
                </div>
                <div className="contact-item">
                    <h3>Phone</h3>
                    <p>+1 (555) 123-4567</p>
                </div>
                <div className="contact-item">
                    <h3>Address</h3>
                    <p>123 Main Street, City, Country</p>
                </div>
            </div>
        </LandingLayout>
    );
}

export default Contact;
