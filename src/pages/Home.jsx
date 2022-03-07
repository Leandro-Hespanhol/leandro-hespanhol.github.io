import React from 'react';
import Draggable from 'react-draggable';
import Type from '../components/TypeWritter';
import foto from '../images/leandro-port.jpeg';
import Contact from './Contact';
import About from './About';
import Stacks from '../components/Stacks';
import Header from './Header';
import './Home.css';
import Projects from './Projects';

import { Trans, useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div id="home-page">
        <Header />
      <section className="home-body-content">
        <div className="title-typewriter-div">
          <h1 className="title-user">
            <Trans i18nkey="home.title">{t('home.title')}</Trans>
          </h1>
          <Draggable handle="#textHandle">
            <h2 className="type-writter" id="textHandle">
              {<Type />}
            </h2>
          </Draggable>
          <p className="intro-description">
            <Trans>{t('home.description')}</Trans>
          </p>
          <Stacks t={t} />
        </div>
        <div className="img-div">
          <img
            src={foto}
            alt="Leandro Hespanhol"
            id="foto"
            className="port-image"
          />
        </div>
      </section>
      <Projects />
      <About />
      <Contact />
      
    </div>
  );
}
