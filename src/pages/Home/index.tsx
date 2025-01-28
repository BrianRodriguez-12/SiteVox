import React from 'react';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <h1>{t('welcome')}</h1>
      <p>{t('introText')}</p>
      <div className="cardsContainer">
        <button
          className="card"
          onClick={() => (window.location.href = '/visas')}
        >
          <div className="cardContent">
            <h2>{t('visas.title')}</h2>
            <p>{t('visas.widgetText')}</p>
          </div>
        </button>
        <button
          className="card"
          onClick={() => (window.location.href = '/travel-tips')}
        >
          <div className="cardContent">
            <h2>{t('travelTips.title')}</h2>
            <p>{t('travelTips.widgetText')}</p>
          </div>
        </button>
        <button
          className="card"
          onClick={() => (window.location.href = '/faq')}
        >
          <div className="cardContent">
            <h2>{t('faqs')}</h2>
            <p>{t('faqsText')}</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Home;
