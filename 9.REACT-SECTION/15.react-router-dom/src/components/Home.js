// src/components/Home.js
import React from "react";
import "./Home.css"; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Understanding React Router DOM</h1>
      <p className="home-subtitle">
        A powerful library for routing in React applications
      </p>
      <div className="home-content">
        <section className="home-section">
          <h2>Introduction</h2>
          <p>
            React Router DOM is a collection of navigational components that
            compose declaratively with your application. It enables seamless
            navigation between different components, providing a dynamic and
            responsive user experience.
          </p>
        </section>
        <section className="home-section">
          <h2>Key Features</h2>
          <ul>
            <li>Declarative routing</li>
            <li>Dynamic route matching</li>
            <li>Nested routes</li>
            <li>Navigation guards</li>
            <li>Route-based code splitting</li>
          </ul>
        </section>
        <section className="home-section">
          <h2>Getting Started</h2>
          <p>
            To get started with React Router DOM, you need to install it using
            npm or yarn. Once installed, you can import the necessary components
            and start defining your routes.
          </p>
          <pre className="code-block">
            <code>
              {`npm install react-router-dom

// In your React component
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

);`}
            </code>
          </pre>
        </section>
      </div>
    </div>
  );
};

export default Home;
