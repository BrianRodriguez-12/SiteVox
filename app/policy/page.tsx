'use client';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import DOMPurify from 'dompurify';

// Services
import { getConfiguration } from '@/services/api';

// Components
import Loading from '@/components/Loading';

export default function CookiesPage() {
  const [cookiesContent, setCookiesContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const { i18n } = useTranslation();

  useEffect(() => {
    setLoading(true);
    getConfiguration(i18n.language)
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();
        setCookiesContent(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching cookies:', error);
        setLoading(false);
      });
  }, [i18n.language]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cookies</h1>
      <div className="content">
        {loading ? (
          <Loading />
        ) : (
          <div
            className="pt-4 cookie-content whitespace-pre-line overflow-auto"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(cookiesContent),
            }}
          ></div>
        )}
      </div>
    </div>
  );
}
