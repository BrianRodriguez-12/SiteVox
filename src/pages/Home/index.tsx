import React from 'react';
import { useTranslation } from 'react-i18next';

// Styles
import './styles.css';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <h1>{t('welcome')}</h1>
      <p>{t('introText')}</p>
      <div className="cardsContainer">
        <div className="card">
          <h2>{t('visas')}</h2>
          <p>{t('visasText')}</p>
        </div>
        <div className="card">
          <h2>{t('travelTips')}</h2>
          <p>{t('travelTipsText')}</p>
        </div>
        <div className="card">
          <h2>{t('faqs')}</h2>
          <p>{t('faqsText')}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
