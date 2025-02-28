'use client';
import React, { useEffect } from 'react';
import { useTranslation } from 'next-i18next';

// Services
import { getConfiguration } from '@/services/api';

// Components
import Loading from '@/components/Loading';

import DOMPurify from 'dompurify';
// Función para reemplazar los saltos de línea por <br />
const formatContent = (content: string) => {
  return content.replace(/\n/g, '<br />');
};

export default function CookiesPage() {
  const [cookiesContent, setCookiesContent] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(true);

  const { i18n } = useTranslation();

  useEffect(() => {
    setLoading(true);
    getConfiguration('es')
      .then((data) => {
        // Formatear el contenido para respetar los saltos de línea
        const formattedContent = formatContent(data);
        setCookiesContent(formattedContent);
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
