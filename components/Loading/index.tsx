import { t } from 'i18next';

// Icons
import RotateRightIcon from '@mui/icons-material/RotateRight';

export default function Loading() {
  return (
    <div className="flex items-center justify-center">
      <RotateRightIcon className="mr-2 animate-spin" />
      <p>{t('loadingMessage')}</p>
    </div>
  );
}
