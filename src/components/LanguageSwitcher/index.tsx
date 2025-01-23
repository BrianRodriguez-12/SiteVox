import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
// Styles
import './styles.css';

const LanguageToggle: React.FC = () => {
  const { i18n } = useTranslation();
  const [isEnglish, setIsEnglish] = useState(i18n.language === 'en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');    console.log('Saved language:', savedLanguage); // Verificar el idioma guardado

    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
      setIsEnglish(savedLanguage === 'en');
    }
  }, [i18n]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  const toggleLanguage = () => {
    const newLanguage = isEnglish ? 'es' : 'en';
    setIsEnglish(!isEnglish);
    changeLanguage(newLanguage);
  };

  return (
    <div className="language-toggle" onClick={toggleLanguage}>
      <button className={`button ${isEnglish ? 'english' : 'spanish'}`}>
        <i className="fa fa-language" />
        <span className="text">{isEnglish ? 'Español' : 'English'}</span>
      </button>
    </div>
  );
};

export default LanguageToggle;
