import { useTranslation } from 'react-i18next';

// Icons
import LanguageIcon from '@mui/icons-material/Language';

// Styles
import styles from './styles.module.css';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <button
      className={`${styles.button} ${i18n.language == 'en' ? styles.english : styles.spanish}`}
      onClick={() => changeLanguage(i18n.language == 'en' ? 'es' : 'en')}
    >
      <LanguageIcon className={styles.headerIcon} />
      <span>{i18n.language == 'en' ? 'Español' : 'English'}</span>
    </button>
  );
}
