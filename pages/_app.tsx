import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

// Components
import Layout from '../components/Layout';

// Styles
import '../styles/globals.css';

// Providers
import { LanguageProvider } from '../provider/Language';

const SiteVox = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </Layout>
  );
};

export default appWithTranslation(SiteVox);
