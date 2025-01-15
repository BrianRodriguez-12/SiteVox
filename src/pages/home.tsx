import React from "react";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div style={styles.container}>
      <h1>{t('welcome')}</h1>
      <p>{t('introText')}</p>
      <div style={styles.cards}>
        <div style={styles.card}>
          <h2>{t('visas')}</h2>
          <p>{t('visasText')}</p>
        </div>
        <div style={styles.card}>
          <h2>{t('travelTips')}</h2>
          <p>{t('travelTipsText')}</p>
        </div>
        <div style={styles.card}>
          <h2>{t('faqs')}</h2>
          <p>{t('faqsText')}</p>
        </div>
      </div>
    </div>
  );
};

import { CSSProperties } from "react";

const styles: { [key: string]: CSSProperties } = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  cards: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginTop: "20px",
  },
  card: {
    backgroundColor: "#FFD700",
    padding: "20px",
    borderRadius: "8px",
    width: "200px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
};

export default Home;
