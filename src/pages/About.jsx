import React from 'react'
import friends from '../images/friends-and-bikes.png'
import { Trans, useTranslation } from 'react-i18next';
import './About.css'

export default function Experiences() {
  const { t } = useTranslation()

  return (
    <section id="about-page">
      <div className="image-description-container">
        <div className="image-div" data-aos="fade-right">
          <img src={ friends } alt="friends-and-bikes" />
        </div>
        <div className="about-me-desc" data-aos="fade-up">
          <h1>{t('about.title')}</h1>
          <Trans i18nkey='about.description'>
            {t('about.description')}
          </Trans>
          <br></br>
          <Trans i18nKey='about.description2'>
          {t('about.description2')}
          </Trans>
        </div>
      </div>
    </section>
  )
}
