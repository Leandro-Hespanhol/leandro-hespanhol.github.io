import React from 'react';
import './Contact.css';
import githubImage from '../images/github-logo.png'
import linkedinImage from '../images/linkedin-logo.png'
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';
import hooray from '../images/celebracao.png'
import { githubLink, linkedinLink } from './Projects/Data';

export default function Contact() {

  const { t } = useTranslation()
  
  return (
    <div id="contact-page">
      <h1 className="contact-title">{t('contact.title')} <img src={hooray} alt="hooray" width={100} /> </h1>
      <h3 className="contact-title">{t('contact.subtitle')} </h3>
      <div className="main-div">
        <div className="contact-container github">
          <a href={ githubLink }
            target="_blank"
            className="github-image"
            rel="noreferrer">
            <img src={ githubImage } alt="Github logo" />
          </a>
        </div>
        <div className="contact-container linkedin">
          <a href={ linkedinLink }
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