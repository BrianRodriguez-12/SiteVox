import React, { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';

// Styles
import './styles.css';
import { getConfiguration } from '../../services/api';

const CookiesPage: React.FC = () => {
  const [cookiesContent, setCookiesContent] = useState<string>('');
  useEffect(() => {
    getConfiguration({ language: 'es' })
      .then((response) => response[0])
      .then((data) => setCookiesContent(data.stringGenerated))
      .catch((error) => console.error('Error fetching cookies:', error));
  }, []);

  return (
    <div className="container">
      <h1>Cookies</h1>
      <div
        className="cookies-content"
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(cookiesContent) }}
      ></div>
    </div>
  );
};

export default CookiesPage;
