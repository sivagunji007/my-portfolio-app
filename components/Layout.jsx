/**
 * File Name: Layout.jsx
 * Description: Layout component with header and navigation
 * Student Name: Sivaprasad Gunji
 * Student ID: 301546700
 * Date: September 25, 2025
 */


// === Imports and Setup ===
import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css';
import logo from '/src/assets/logo.png'; // Replace with your actual logo path

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="layout-header">
        <div className="logo-section">
          <img src={logo} alt="Site Logo" className="site-logo" />
          <h1 className="site-name">Sivaprasad Gunji</h1>
        </div>
        <nav className="layout-nav">
          <Link to="/">Home</Link> | <Link to="/about-me">About Me</Link> | <Link to="/projects">Projects</Link> | <Link to="/services">Services</Link> | <Link to="/contact-me">Contact Me</Link>
        </nav>
      </header>
      <main className="layout-content">{children}</main>
    </div>
  );
};

export default Layout;
