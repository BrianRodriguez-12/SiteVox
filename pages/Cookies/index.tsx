import React, { useEffect, useState, useContext } from 'react';
import DOMPurify from 'dompurify';

// Services
import { getConfiguration } from '../../services/api';

// Context
import { LanguageContext } from '../../context/LanguageContext';

// Components
import Loading from '../../components/Loading';

// Styles
import './styles.module.css';

const CookiesPage: React.FC = () => {
  const [cookiesContent, setCookiesContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const { language } = useContext(LanguageContext);

  useEffect(() => {
    setLoading(true);
    getConfiguration({ language })
      .then((response) => response[0])
      .then((data) => {
        setCookiesContent(data.stringGenerated);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching cookies:', error);
        setLoading(false);
      });
  }, [language]);

  return (
    <div className="container">
      <h1>Cookies</h1>
      <div className="content">
        {loading ? (
          <Loading />
        ) : (
          <div
            className="cookiesText"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(cookiesContent),
            }}
          ></div>
        )}
      </div>
    </div>
  );
};

export default CookiesPage;
