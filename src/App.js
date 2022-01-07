import React from 'react'
import './App.css'
import ProfileProvider from './context/ContextAPI';

import Home from './pages/Home';

import i18n from './services/languageDetector';

export default function App() {
    return (
      <ProfileProvider>
        <Home />
      </ProfileProvider>
    )
}
