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
    changeLanguage(isEnglish ? 'es' : 'en');
  };

  return (
    <div className="language-toggle" onClick={toggleLanguage}>
      <div className={`button ${isEnglish ? 'english' : 'spanish'}`}>
        <i className="fa fa-language" />
        <span className="text">{isEnglish ? 'English' : 'Español'}</span>
      </div>
    </div>
  );
};

export default LanguageToggle;
