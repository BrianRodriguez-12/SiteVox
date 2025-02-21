'use client';
import React from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <div className="container">
      <h1>404</h1>
      <p>{t('messageNotFound')}</p>
      <Link className="link" href="/">
        {t('home')}
      </Link>
    </div>
  );
}
