import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
    return (
      <header className="header-header">
        <nav className="links-nav navbar navbar-dark bg-dark">
          <div>
            <Link to="/" className="navbar-brand">Home</Link>
          </div>
          <div>
            <Link to="/projects" className="navbar-brand">Projects</Link>
          </div>
          <div>
            <Link to="/contact" className="navbar-brand">Contact</Link>
          </div>
          <div>
            <Link to="/experiences" className="navbar-brand">Experiences</Link>
          </div>
        </nav>
      </header>
    );
}
