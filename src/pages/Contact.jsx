import React from 'react';
import githubImage from '../images/github-logo.png';
import linkedinImage from '../images/linkedin-logo.png';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';
import hooray from '../images/celebracao.png';
import './Contact.css';
import { githubLink, linkedinLink } from './data/projectsData';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact-page" className="contact-page">
      <h1 className="contact-title" data-aos="fade-up">
        {t('contact.title')} <img src={hooray} alt="hooray" width={100} />{' '}
      </h1>
      <div className="github-linkedin-container">
        <div className="contact-container github" data-aos="fade-right">
          <a
            href={githubLink}
            target="_blank"
            className="github-image"
            rel="noreferrer"
          >
            <img src={githubImage} alt="Github logo" />
          </a>
        </div>
        <div className="contact-container linkedin" data-aos="fade-left">
          <a
            href={linkedinLink}
            target="_blank"
            className="linkedin-image"
            rel="noreferrer"
          >
            <img src={linkedinImage} alt="Linkedin logo" />
          </a>
        </div>
      </div>
      <Footer />
    </section>
  );
}
