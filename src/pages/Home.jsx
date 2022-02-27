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
import { stackDocumentation } from './data/stacksDocumentation';

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
              {stackDocumentation.map(({git, node, npm, mocha, mysql, HTML, CSS, javascript, react, redux, jest, docker}) => (
            <div className="stacks-container">
              <div className="stack-description-container">
              <a href={git} target="_blank" rel="noreferrer">
                <img
                    align="center"
                    alt="LeoH-Git"
                    className="stack-icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                  />
              </a>
                <p>Git</p>
              </div>
              <div className="stack-description-container">
                <a href={node} target="_blank" rel="noreferrer">
                  <img
                    align="center"
                    alt="LeoH-NodeJS"
                    className="stack-icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
                  />
                </a>
                 <p>NodeJS</p>
              </div>
              <div className="stack-description-container">
                <a href={npm} target="_blank" rel="noreferrer">
                  <img
                    align="center"
                    alt="LeoH-npm"
                    className="stack-icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
                  />
                </a>
                 <p>Npm</p>
              </div>
              <div className="stack-description-container">
                <a href={mocha} target="_blank" rel="noreferrer">
                  <img
                    align="center"
                    alt="LeoH-mocha"
                    className="stack-icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg"
                  />
                </a>
                  <p>Mocha</p>
              </div>
              <div className="stack-description-container">
                <a href={mysql} target="_blank" rel="noreferrer">
                  <img
                    align="center"
                    alt="LeoH-mysql"
                    className="stack-icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                  />
                </a>
                <p>mySQL</p>
              </div>
              <div className="stack-description-container">
              <a href={HTML} target="_blank" rel="noreferrer">
                  <img
                    align="center"
                    alt="LeoH-html"
                    className="stack-icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  />
                </a>
                <p>HTML</p>
              </div>
              <div className="stack-description-container">
              <a href={CSS} target="_blank" rel="noreferrer">
                  <img
                    align="center"
                    alt="LeoH-css"
                    className="stack-icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg"
                  />
                </a>
                <p>CSS</p>
              </div>
              <div className="stack-description-container">
              <a href={javascript} target="_blank" rel="noreferrer">
                  <img
                    align="center"
                    alt="LeoH-javascript"
                    className="stack-icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
                  />
                </a>
                <p>Javacript</p>
              </div>
              <div className="stack-description-container">
              <a href={react} target="_blank" rel="noreferrer">
                  <img
                    align="center"
                    alt="LeoH-React"
                    className="stack-icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  />
                </a>
                <p>React</p>
              </div>
              <div className="stack-description-container">
              <a href={redux} target="_blank" rel="noreferrer">
                  <img
                    align="center"
                    alt="LeoH-Redux"
                    className="stack-icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
                  />
                </a>
                <p>Redux</p>
              </div>
              <div className="stack-description-container">
              <a href={jest} target="_blank" rel="noreferrer">
                  <img
                    align="center"
                    alt="LeoH-jest"
                    className="stack-icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
                  />
                </a>
                <p>Jest</p>
              </div>
              <div className="stack-description-container">
              <a href={docker} target="_blank" rel="noreferrer">
                  <img
                    align="center"
                    alt="LeoH-docker"
                    className="stack-icon"
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
                  />
                </a>
                <p>Docker</p>
              </div>
            </div>))}
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
