import React from 'react';
import { useTranslation } from 'react-i18next';

const FAQ: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <h2>{t('ds160FAQ.title')}</h2>
      <div className="content">
        <ul>
          <li>
            <h3>{t('ds160FAQ.q1.question')}</h3> {t('ds160FAQ.q1.answer')}{' '}
          </li>
          <li>
            <h3>{t('ds160FAQ.q2.question')}</h3>
            {t('ds160FAQ.q2.answer')}
          </li>
          <li>
            <h3>{t('ds160FAQ.q3.question')}</h3>
            {t('ds160FAQ.q3.answer')}
          </li>
          <li>
            <h3>{t('ds160FAQ.q4.question')}</h3>
            {t('ds160FAQ.q4.answer')}
          </li>
          <li>
            <h3>{t('ds160FAQ.q5.question')}</h3>
            {t('ds160FAQ.q5.answer')}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FAQ;
