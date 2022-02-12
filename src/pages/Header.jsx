import React from 'react';
import './Header.css';

import { useTranslation } from 'react-i18next';

const lngs = {
  en: { nativeFlag: String.fromCodePoint(127482, 127480) },
  ptbr: { nativeFlag: String.fromCodePoint(127463, 127479) }
};

export default function Header() {
  const { t, i18n } = useTranslation();

  return (
    <header className="header-header">
      <nav className="links-nav navbar navbar-dark bg-dark">
        <div>
          <a 
            href="#home-page" 
            className="navbar-brand">
            {t('header.home')}
          </a>
        </div>
        <div>
          <a 
            href="#front-projects-page" 
            className="navbar-brand"
          >{t('header.projects')}
          </a>
        </div>
        <div>
          <a href="#about-page" className="navbar-brand">
          {t('header.about')}
          </a>
        </div>
        <div>
          <a href="#contact-page" className="navbar-brand">
          {t('header.contact')}
          </a>
        </div>
        <div>
        <div className="langs-div">
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
      </nav>
    </header>
  );
}
