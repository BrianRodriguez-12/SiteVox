import React from 'react';
import { useTranslation } from 'react-i18next';

const NotFound: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <h1>404</h1>
      <p>{t('messageNotFound')}</p>
      <a className="link" href="/">
        {t('home')}
      </a>
    </div>
  );
};

export default NotFound;
