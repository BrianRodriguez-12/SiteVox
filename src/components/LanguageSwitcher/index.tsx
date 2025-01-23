import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
// Styles
import './styles.css';

const LanguageToggle: React.FC = () => {
  const [isEnglish, setIsEnglish] = useState(true);
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const toggleLanguage = () => {
    setIsEnglish(!isEnglish);
    changeLanguage(isEnglish ? 'en' : 'es');
  };

  return (
    <div className="language-toggle" onClick={toggleLanguage}>
      <button className={`button ${isEnglish ? 'english' : 'spanish'}`}>
        <i className="fa fa-language" />
        <span className="text">{isEnglish ? 'English' : 'Español'}</span>
      </button>
    </div>
  );
};

export default LanguageToggle;
