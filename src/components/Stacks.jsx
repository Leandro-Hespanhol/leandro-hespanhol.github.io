import React from 'react'
import { stacksDocumentation } from '../pages/data/stacksDocumentation';

export default function stacks(props) {
  const { t } = props;
    
  return (
    <div>
    <p className="intro-description">
      {t('home.stacks')}
    </p>
    <div className="stacks-container">
      {stacksDocumentation.map(({documentantion, svg, stack, alt}) => (
      <div className="stack-description-container">
      <a href={documentantion} target="_blank" rel="noreferrer">
        <img
            align="center"
            alt={alt}
            className="stack-icon"
            src={svg}
          />
      </a>
        <p>{stack}</p>
      </div>
    ))}
    </div>
    <p className="intro-description">
      {t('home.stacks2')}
    </p>
  </div>
  )
}
