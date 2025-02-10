import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticPropsContext } from 'next';

export async function getI18nStaticProps(
  ctx: GetStaticPropsContext,
  namespaces: string[] = ['common']
) {
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale ?? 'es', namespaces)),
    },
  };
}
