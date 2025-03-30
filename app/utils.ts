// Types
import { TFunction } from 'i18next';

// Enums
import { Country } from '@/utils/enums';

export const routeInfoMapper = (
  t: TFunction<'translation', undefined>,
  countryCode: string
) => {
  const title =
    countryCode == Country.UNITED_STATES
      ? t('planTripToUS')
      : t('planTripToJapan');
  const description =
    countryCode == Country.UNITED_STATES
      ? t('cbxDescription')
      : t('japanDescription');
  const idealDates =
    countryCode == Country.UNITED_STATES ? t('idealDates') : t('bestDates');
  const howToUseCBX =
    countryCode == Country.UNITED_STATES
      ? t('howToUseCBX')
      : t('publicTransport');
  const transportOptions =
    countryCode == Country.UNITED_STATES
      ? t('transportOptions')
      : t('recommendedRoutes');
  return {
    title,
    description,
    idealDates,
    howToUseCBX,
    transportOptions,
  };
};
