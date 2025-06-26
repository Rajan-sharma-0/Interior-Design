import React from 'react';
import "./Contact.css";  
import Footer from '../Components/Footer/Footer';
function ContactUs() {
  return (
    <div>
      {/* Banner Section */}
      <section className="contact_banner">
        <img
          src="/image/contact.jpg"
          alt="CONTCT US"
        />
        <h1>Get In Touch With Us</h1>
        <p>We're here to answer any questions you may have.</p>
      </section>

      {/* Contact Form */}
      <section className="contact-form">
        <div className="form-container">
          <h2>Your Details</h2>
          <form action="#" method="POST">
            <label htmlFor="name">Name: </label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="phone">Phone: </label>
            <input type="tel" id="phone" name="phone" />

            <label htmlFor="message">Message: </label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </section>

      {/* Company Contact Info */}
      <section className="contact-info">
        <h2>CONTACT INFORMATION</h2>
        
        <address>
          Qubinets Interiors<br />
          Address:- 123 Main Street<br />
          City, State Zip Code<br />
          Phone: <a href="tel:1234567890">123-456-7890</a><br />
          Email: <a href="mailto:info@example.com">info@example.com</a>
        </address>
      </section>
      <Footer />
    </div>
  );
}

export default ContactUs;