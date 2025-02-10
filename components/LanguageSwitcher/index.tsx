import { useRouter } from 'next/router';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { locale, pathname, asPath } = router;

  const changeLanguage = (lang: string) => {
    router.push(pathname, asPath, { locale: lang });
  };

  return (
    <div>
      <button onClick={() => changeLanguage('es')} disabled={locale === 'es'}>
        🇪🇸 Español
      </button>
      <button onClick={() => changeLanguage('en')} disabled={locale === 'en'}>
        🇺🇸 English
      </button>
    </div>
  );
};

export default LanguageSwitcher;
