'use client';
import React from 'react';
import { useTranslation } from 'next-i18next';

export default function FAQ() {
  const { t } = useTranslation();

  return (
    <div className="container">
      <h2>{t('FAQ.title')}</h2>
      <div className="content">
        <li>
          <h3>{t('FAQ.q1.question')}</h3>
          {t('FAQ.q1.answer')}
        </li>
        <li>
          <h3>{t('FAQ.q2.question')}</h3>
          {t('FAQ.q2.answer')}
        </li>
        <li>
          <h3>{t('FAQ.q3.question')}</h3>
          {t('FAQ.q3.answer')}
        </li>
        <li>
          <h3>{t('FAQ.q4.question')}</h3>
          {t('FAQ.q4.answer')}
        </li>
        <li>
          <h3>{t('FAQ.q5.question')}</h3>
          {t('FAQ.q5.answer')}
        </li>
      </div>
    </div>
  );
}
