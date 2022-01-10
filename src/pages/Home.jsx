import React from 'react';
import Draggable from 'react-draggable';
import Type from '../components/TypeWritter';
import foto from '../images/leandro-port.jpeg';
import ptbr from '../images/flags/brazil.png'
import Contact from './Contact';
import About from './About';
import Header from './Header';
import './Home.css';
import Projects from './Projects';
import { Trans, useTranslation } from 'react-i18next';

const lngs = {
  en: { nativeFlag: '🇺🇸' },
  ptbr: { nativeFlag: ptbr }
};

export default function Home() {
    const { t, i18n } = useTranslation();

    return (
      <div id="home-page">
        <div className="header-buttons">
          <div>
            <Header />
          </div>
          <div >
          {Object.keys(lngs).map((lng) => (
              <button key={lng} 
                type="submit"
                className={ i18n.resolvedLanguage === lng ? 'lang-button-active' : 'lang-button-inactive' }
                onClick={() => i18n.changeLanguage(lng)}
              >
                {lngs[lng].nativeFlag}
              </button>
            ))}
          </div>
        </div>
        <div className="home-body-content">
          <div className="title-typewriter-div">
              <h1 className="title-user">
                <Trans i18nkey="home.title">
              {t('home.title')}
                </Trans>
              </h1>
            <Draggable handle="#textHandle">
              <h2 className="type-writter" id="textHandle">{<Type />}</h2>
            </Draggable>
            <p className="intro-description">
            <Trans>
            {t('home.description')}
            </Trans>
            </p>
          </div>
          <div className="img-div">
            <img src={ foto } alt="Leandro Hespanhol" id="foto" className="port-image" />
          </div>
        </div>
        <Projects />
        <About />
        <Contact />
      </div>
    );
}
