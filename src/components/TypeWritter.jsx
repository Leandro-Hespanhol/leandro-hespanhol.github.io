import React from "react";
import Typewriter from "typewriter-effect";
import { useTranslation } from 'react-i18next';

function Type() {
  const { t } = useTranslation();
  return (
    <Typewriter
      options={{
        strings: [t('home.typewritter1'), t('home.typewritter2'), t('home.typewritter3')],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
      }}
    />
  );
}

export default Type;