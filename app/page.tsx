'use client';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="container">
      <h1>{t('welcome')}</h1>
      <p>{t('introText')}</p>
      <div className="cardsContainer">
        <Link href="/visas" className="card">
          <div className="cardContent">
            <h2>{t('visas.title')}</h2>
            <p>{t('visas.widgetText')}</p>
          </div>
        </Link>
        <Link href="/travel-tips" className="card">
          <div className="cardContent">
            <h2>{t('travelTips.title')}</h2>
            <p>{t('travelTips.widgetText')}</p>
          </div>
        </Link>
        <Link href="/faq" className="card">
          <div className="cardContent">
            <h2>{t('faqs')}</h2>
            <p>{t('faqsText')}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
