'use client'; // Asegura que este componente solo se ejecute en el cliente

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

// Styles
import './styles.module.css';
// Components
import LanguageToggle from '../LanguageSwitcher';

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header>
      <Link href="/">
        <Image
          width={40}
          height={40}
          src="/images/vox-mex.png"
          alt="VoxMex Logo"
        />
        <h1>VoxMex</h1>
      </Link>

      <nav>
        <Link href="/">
          <span suppressHydrationWarning>{t('home')}</span>
        </Link>
        <Link href="/about-us">
          <span suppressHydrationWarning>{t('aboutUs')}</span>
        </Link>
        <Link href="/services">
          <span suppressHydrationWarning>{t('services')}</span>
        </Link>
      </nav>

      <LanguageToggle />
    </header>
  );
};

export default Header;
