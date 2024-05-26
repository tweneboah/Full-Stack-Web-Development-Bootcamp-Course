// src/components/About.js
import React from "react";
import "./About.css"; // Import the CSS file

export const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About This Application</h1>
      <div className="about-content">
        <section className="about-section">
          <h2>Overview</h2>
          <p>
            This application is a demonstration of using React Router DOM for
            routing in a React application. React Router DOM is a powerful
            library that enables navigation among views or components within a
            React application, providing a dynamic and responsive user
            experience.
          </p>
        </section>
        <section className="about-section">
          <h2>Features</h2>
          <ul>
            <li>Declarative routing using JSX</li>
            <li>Nested routes for complex layouts</li>
            <li>URL parameters and query strings</li>
            <li>Programmatic navigation</li>
            <li>Route-based code splitting</li>
          </ul>
        </section>
        <section className="about-section">
          <h2>Technologies Used</h2>
          <p>
            This application is built using modern web development technologies,
            including:
          </p>
          <ul>
            <li>React: A JavaScript library for building user interfaces</li>
            <li>React Router DOM: A routing library for React applications</li>
            <li>CSS: For styling the components</li>
          </ul>
        </section>
        <section className="about-section">
          <h2>Contact</h2>
          <p>
            If you have any questions or feedback, feel free to reach out
            through the contact page.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
