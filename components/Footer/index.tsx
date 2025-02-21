import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import FacebookIcon from '@mui/icons-material/Facebook';

// Styles
import styles from './styles.module.css';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="col-span-3 p-4">
      <div className={styles.footerSection}>
        <h3 className={styles.footerTitle}>{t('quickLinks')}</h3>
        <li>
          <Link href="/" className={styles.footerLink}>
            {t('home')}
          </Link>
        </li>
        <li>
          <Link href="/contact-us" className={styles.footerLink}>
            {t('contactUs')}
          </Link>
        </li>
        <li>
          <Link href="/policy" className={styles.footerLink}>
            {t('privacyPolicy')}
          </Link>
        </li>
      </div>
      <div className={styles.footerSection}>
        <h3 className={styles.footerTitle}>{t('contact')}</h3>
        <li>
          <p className={styles.footerText}>
            {t('email.title')}:{' '}
            <a
              className={styles.footerText}
              href={`mailto:contacto@voxmex.com?subject=${encodeURIComponent(t('email.subject'))}&body=${encodeURIComponent(t('email.body'))}`}
            >
              contacto@voxmex.com
            </a>
          </p>
        </li>
        <li>
          <p className={styles.footerText}>{t('phone')}: +5656605207</p>
        </li>
      </div>
      <div className={styles.footerSection}>
        <h3 className={styles.footerTitle}>{t('followUs')}</h3>
        <a
          className={styles.footerLink}
          href="https://www.facebook.com/VoxMexOficial"
          aria-label="Facebook"
        >
          <FacebookIcon />
        </a>
        {/* 
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className={styles.footerLink}
            >
              <i className={styles.fabfa}-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className={styles.footerLink}
            >
              <i className={styles.fabfa}-instagram"></i>
            </a> */}
      </div>
    </footer>
  );
}
