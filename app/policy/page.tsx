'use client';
import DOMPurify from 'dompurify';
import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';

// Services
import { getConfiguration } from '@/services/api';

// Components
import Loading from '@/components/Loading';

// Styles
import styles from './styles.module.css';

export default function CookiesPage() {
  const [cookiesContent, setCookiesContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const { i18n } = useTranslation();

  useEffect(() => {
    setLoading(true);
    getConfiguration({ language: i18n.language })
      .then((response) => response[0])
      .then((data) => {
        setCookiesContent(data.stringGenerated);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching cookies:', error);
        setLoading(false);
      });
  }, [i18n.language]);

  return (
    <div className={'container'}>
      <h1>Cookies</h1>
      <div className={'content'}>
        {loading ? (
          <Loading />
        ) : (
          <div
            className={styles.cookiesText}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(cookiesContent),
            }}
          ></div>
        )}
      </div>
    </div>
  );
}
