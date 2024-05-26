// src/components/Contact.js
import React from "react";
import "./Contact.css"; // Import the CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <div className="contact-content">
        <section className="contact-section">
          <h2>Get in Touch</h2>
          <p>
            We would love to hear from you! Whether you have a question about
            our application, need assistance, or just want to provide feedback,
            feel free to reach out to us.
          </p>
        </section>
        <section className="contact-section">
          <h2>Contact Information</h2>
          <ul>
            <li>Email: contact@example.com</li>
            <li>Phone: (123) 456-7890</li>
            <li>Address: 123 Main Street, Anytown, USA</li>
          </ul>
        </section>
        <section className="contact-section">
          <h2>Follow Us</h2>
          <p>Stay connected through our social media channels:</p>
          <ul className="social-media-list">
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Contact;
