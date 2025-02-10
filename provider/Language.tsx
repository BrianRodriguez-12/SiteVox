import React, { useState, useEffect } from 'react';
import { LanguageContext } from '../context/LanguageContext';

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<string>('en'); // Idioma predeterminado
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Indica que estamos en el cliente
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  if (!isClient) {
    return null; // Evita el desajuste en SSR
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
