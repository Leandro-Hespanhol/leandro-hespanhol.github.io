import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="header-header">
      <nav className="links-nav navbar navbar-dark bg-dark">
        <div>
          <a 
            href="#home-page" 
            className="navbar-brand">
            Home
          </a>
        </div>
        <div>
          <a 
            href="#projects-page" 
            className="navbar-brand"
            // duration={5000}
          >
            Projects
          </a>
        </div>
        <div>
          <a href="#contact-page" className="navbar-brand">
            Contact
          </a>
        </div>
        <div>
          <a href="#experiences" className="navbar-brand">
            Experiences
          </a>
        </div>
      </nav>
    </header>
  );
}
