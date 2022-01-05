import React from 'react';
import Header from './Header';
import './Contact.css';
import githubImage from '../images/github-logo.png'
import linkedinImage from '../images/linkedin-logo.png'
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div>
      <Header />
      <div className="main-div">
        <div className="contact-container github">
          <a href="https://github.com/Leandro-Hespanhol"
            target="_blank"
            className="github-image"
            rel="noreferrer">
            <img src={ githubImage } alt="Github logo" />
          </a>
        </div>
        <div className="contact-container linkedin">
          <a href="https://www.linkedin.com/in/leandro-jos%C3%A9-ferreira-hespanhol-91b3a2136/"
            target="_blank"
            className="linkedin-image"
            rel="noreferrer">
            <img src={ linkedinImage } alt="Linkedin logo" />
          </a>
        </div>
      </div>
    <Footer />
    </div>
  )
}
