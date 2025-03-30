import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

// Components
import LanguageToggle from '../LanguageSwitcher';

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="col-span-3 p-4">
      <div className="flex items-center mb-2 md:mb-0">
        <Link
          href="/"
          className="flex items-center text-inherit no-underline p-0"
        >
          <Image
            className="w-a h-a pr-2 rounded-full"
            width={40}
            height={40}
            src="/vox-mex.webp"
            alt="VoxMex Logo"
          />
          <h1 className="hidden md:block text-backgroundColor">VoxMex</h1>
        </Link>
      </div>
      <nav className="flex items-center gap-6 md:gap-12">
        <Link href="/" className="no-underline font-bold text-backgroundColor">
          <span suppressHydrationWarning>{t('home')}</span>
        </Link>
        <Link
          href="/about-us"
          className="no-underline font-bold text-backgroundColor"
        >
          <span suppressHydrationWarning>{t('aboutUs')}</span>
        </Link>
        <Link
          href="/visa"
          className="no-underline font-bold text-backgroundColor"
        >
          <span suppressHydrationWarning>{t('visasTitle')}</span>
        </Link>
      </nav>
      <div className="mt-2 md:mt-0">
        <LanguageToggle />
      </div>
    </header>
  );
}
