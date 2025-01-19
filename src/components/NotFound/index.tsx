import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function NotFound() {
  const { t } = useTranslation();
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404</h1>
      <p>{t('message')}</p>
      <Link to="/">{t('home')}</Link>
    </div>
  );
}

export default NotFound;
