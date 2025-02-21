import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

// Components
import LanguageToggle from '../LanguageSwitcher';

// Styles
import styles from './styles.module.css';

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="col-span-3 p-4">
      <Link className={styles.logo} href="/">
        <Image
          className={styles.logoImage}
          width={40}
          height={40}
          src="/vox-mex.webp"
          alt="VoxMex Logo"
        />
        <h1 className={styles.headerColor}>VoxMex</h1>
      </Link>
      <nav className={styles.nav}>
        <Link className={styles.navLink} href="/">
          <span suppressHydrationWarning>{t('home')}</span>
        </Link>
        <Link className={styles.navLink} href="/about-us">
          <span suppressHydrationWarning>{t('aboutUs')}</span>
        </Link>
        <Link className={styles.navLink} href="/travel-plans">
          <span suppressHydrationWarning>{t('travelPlansTitle')}</span>
        </Link>
      </nav>
      <LanguageToggle />
    </header>
  );
}
