import React, { useState, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { FaLanguage } from 'react-icons/fa';

// Styles
import './styles.css';

// Context
import { LanguageContext } from '../../context/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { i18n } = useTranslation();
  const { language, setLanguage } = useContext(LanguageContext);
  const [isEnglish, setIsEnglish] = useState(language === 'en');

  useEffect(() => {
    setIsEnglish(language === 'en');
  }, [language]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    setLanguage(lng);
  };

  const toggleLanguage = () => {
    const newLanguage = isEnglish ? 'es' : 'en';
    setIsEnglish(!isEnglish);
    changeLanguage(newLanguage);
  };

  return (
    <div onClick={toggleLanguage}>
      <button className={`button ${isEnglish ? 'english' : 'spanish'}`}>
        <FaLanguage className="headerIcon" />
        <span>{isEnglish ? 'Español' : 'English'}</span>
      </button>
    </div>
  );
};

export default LanguageToggle;
