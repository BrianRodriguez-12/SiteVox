import { connectToDatabase } from '@/lib/dbConnect';
import { t } from 'i18next';

// Models
import Country from '@/lib/models/Countries';
import Routes from '@/lib/models/Routes';
import '@/lib/models/Places';

export async function GET(request: Request) {
  await connectToDatabase();

  const url = new URL(request.url);
  const countryCode = url.searchParams.get('countryCode');
  const language = url.searchParams.get('language') || 'es';
  console.log(' GET ~ language:', language);

  if (!countryCode) {
    return new Response(
      JSON.stringify({ message: t('country') + t('messageNotFound') }),
      {
        status: 400,
      }
    );
  }

  const country = await Country.findOne({ code: countryCode });
  if (!country) {
    return new Response(
      JSON.stringify({ message: t('country') + t('messageNotFound') }),
      {
        status: 404,
      }
    );
  }

  const routes = await Routes.find({ countryId: country._id })
    .populate('places')
    .lean();

  if (!routes.length) {
    return new Response(JSON.stringify({ message: t('routeNotFound') }), {
      status: 404,
    });
  }

  const localizedRoutes = routes.map((route) => ({
    ...route,
    name: route.name[language] || route.name['es'],
    places: route.places.map(
      (place: {
        name: Record<string, string>;
        description: Record<string, string>;
        location: { lat: number; lng: number };
        price: number;
        nearby: { name: Record<string, string> }[];
      }) => ({
        ...place,
        name: place.name[language] || place.name['es'],
        description: place.description[language] || place.description['es'],
        nearby: place.nearby.map(
          (nearby: { name: Record<string, string> }) => ({
            ...nearby,
            name: nearby.name[language] || nearby.name['es'],
          })
        ),
        location: { lat: place.location.lat, lng: place.location.lng },
      })
    ),
  }));

  return new Response(JSON.stringify(localizedRoutes), { status: 200 });
}
