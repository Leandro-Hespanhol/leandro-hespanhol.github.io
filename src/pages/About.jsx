import React from 'react'
import friends from '../images/friends-and-bikes.png'
import { Trans, useTranslation } from 'react-i18next';
import './About.css'

export default function Experiences() {
  const { t } = useTranslation()

  return (
    <div id="about-page">
      <div className="image-description">
        <div className="image-div">
          <img src={ friends } alt="friends-and-bikes" />
        </div>
        <div className="about-me-desc">
          <h1>{t('about.title')}</h1>
          <Trans i18nkey='home.description'>
            {t('about.description')}
          </Trans>
          <p>
          <img align="center" alt="LeoH-HTML" height="40" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
          <img align="center" alt="LeoH-CSS" height="40" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg"/>
          <img align="center" alt="LeoH-JS" height="40" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
          <img align="center" alt="LeoH-React" height="40" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
          <img align="center" alt="LeoH-Redux" height="40" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
          <img align="center" alt="LeoH-mySql" height="40" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
          </p>
          <br></br>
          <Trans i18nKey='about.description2'>
          {t('about.description2')}
          </Trans>
        </div>
      </div>
    </div>
  )
}
