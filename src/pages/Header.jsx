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
            href="#front-projects-page" 
            className="navbar-brand"
          >Projects
          </a>
        </div>
        <div>
          <a href="#about-page" className="navbar-brand">
            About
          </a>
        </div>
        <div>
          <a href="#contact-page" className="navbar-brand">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
