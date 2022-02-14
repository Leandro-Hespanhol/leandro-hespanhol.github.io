import React, { useEffect, useState } from 'react';
import './Header.css';
import { Link } from 'react-scroll';
// import { animateScroll as scroll } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';

import { useTranslation } from 'react-i18next';

const lngs = {
  en: { nativeFlag: String.fromCodePoint(127482, 127480) },
  ptbr: { nativeFlag: String.fromCodePoint(127463, 127479) },
};

export default function Header() {
  const { t, i18n } = useTranslation();

  const [scrollDir, setScrollDir] = useState(true);

  const isScreenMedium = useMediaQuery({ query: '(max-width: 1015px)' });

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDir(!(scrollY > lastScrollY));
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollDir]);

  return (
    <header
      className="header-header"
      style={{
        animation: isScreenMedium
          ? 'none'
          : scrollDir
          ? 'fadeIn 1s forwards'
          : 'fadeOut 1s forwards',
      }}
    >
      <nav className="links-nav navbar navbar-dark bg-dark">
        <div>
          <Link
            to="home-page"
            className="navbar-brand"
            duration={500}
            offset={-30}
          >
            {t('header.home')}
          </Link>
        </div>
        <div>
          <Link
            to="projects-page"
            className="navbar-brand"
            duration={500}
            offset={-30}
          >
            {t('header.projects')}
          </Link>
        </div>
        <div>
          <Link
            to="about-page"
            className="navbar-brand"
            duration={500}
            offset={-30}
          >
            {t('header.about')}
          </Link>
        </div>
        <div>
          <Link
            to="contact-page"
            className="navbar-brand"
            duration={500}
            offset={-30}
          >
            {t('header.contact')}
          </Link>
        </div>
        <div>
          <div className="langs-div">
            {Object.keys(lngs).map((lng) => (
              <button
                key={lng}
                type="submit"
                className={
                  i18n.resolvedLanguage === lng
                    ? 'lang-button-active'
                    : 'lang-button-inactive'
                }
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
