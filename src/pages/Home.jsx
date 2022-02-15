import React from 'react';
import Draggable from 'react-draggable';
import Type from '../components/TypeWritter';
import foto from '../images/leandro-port.jpeg';
import Contact from './Contact';
import About from './About';
import Header from './Header';
import './Home.css';
import ProjectsFront from './Projects';
import { Trans, useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div id="home-page">
          <Header />
      <div className="home-body-content">
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
          <div>
            <p className="intro-description">
              {t('home.stacks')}
            </p>
            <img
              align="center"
              alt="LeoH-Git"
              height="40"
              width="50"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            />
            <img
              align="center"
              alt="LeoH-HTML"
              height="40"
              width="50"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            />
            <img
              align="center"
              alt="LeoH-CSS"
              height="40"
              width="50"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg"
            />
            <img
              align="center"
              alt="LeoH-JS"
              height="40"
              width="50"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
            />
            <img
              align="center"
              alt="LeoH-React"
              height="40"
              width="50"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
            />
            <img
              align="center"
              alt="LeoH-Redux"
              height="40"
              width="50"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
            />
            <img
              align="center"
              alt="LeoH-Jest"
              height="40"
              width="50"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
            />
            <img
              align="center"
              alt="LeoH-Docker"
              height="40"
              width="50"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg"
            />
            <img
              align="center"
              alt="LeoH-mySql"
              height="40"
              width="50"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
            />
            <p className="intro-description">
              {t('home.stacks2')}
            </p>
          </div>
        </div>
        <div className="img-div">
          <img
            src={foto}
            alt="Leandro Hespanhol"
            id="foto"
            className="port-image"
          />
        </div>
      </div>
      <ProjectsFront />
      <About />
      <Contact />
    </div>
  );
}
