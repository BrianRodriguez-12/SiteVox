import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="col-span-3 p-4 bg-primaryColor text-backgroundColor">
      <div className="mb-4">
        <h3 className="text-backgroundColor">{t('quickLinks')}</h3>
        <ul>
          <li>
            <Link
              href="/"
              className="text-backgroundColor no-underline transition-opacity duration-300 hover:opacity-75"
            >
              {t('home')}
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-backgroundColor no-underline transition-opacity duration-300 hover:opacity-75"
            >
              {t('contactUs')}
            </Link>
          </li>
          <li>
            <Link
              href="/policy"
              className="text-backgroundColor no-underline transition-opacity duration-300 hover:opacity-75"
            >
              {t('privacyPolicy')}
            </Link>
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-backgroundColor">{t('contact')}</h3>
        <ul>
          <li>
            <p className="text-backgroundColor m-0">
              {t('email.title')}:{' '}
              <a
                className="text-backgroundColor"
                href={`mailto:contacto@voxmex.com?subject=${encodeURIComponent(t('email.subject'))}&body=${encodeURIComponent(t('email.body'))}`}
              >
                contacto@voxmex.com
              </a>
            </p>
          </li>
          <li>
            <p className="text-backgroundColor m-0">
              {t('phone')}: +5656605207
            </p>
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-backgroundColor">{t('followUs')}</h3>
        <a
          className="text-backgroundColor no-underline transition-opacity duration-300 hover:opacity-75"
          href="https://www.facebook.com/VoxMexOficial"
          aria-label="Facebook"
        >
          <FacebookIcon />
        </a>
      </div>
    </footer>
  );
}
