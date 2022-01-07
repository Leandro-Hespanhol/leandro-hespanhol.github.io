import React from 'react';
import Header from './Header';
import './Contact.css';
import githubImage from '../images/github-logo.png'
import linkedinImage from '../images/linkedin-logo.png'
import Footer from '../components/Footer';
import { Trans, useTranslation } from 'react-i18next';
import hooray from '../images/celebracao.png'

export default function Contact() {

  const { t } = useTranslation()
  
  return (
    <div id="contact-page">
      {/* <Header /> */}
      <h1 className="contact-title">{t('contact.title')} <img src={hooray} alt="hooray" width={100} /> </h1>
      <h3 className="contact-title">{t('contact.subtitle')} </h3>
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
