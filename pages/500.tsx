import { Layout, FiveOhOh, Page } from '../layout';
import { getFooterData, getSeoData } from '../lib/gql';
import { IFooter, ISeo } from '../lib/types';

interface I500 extends IFooter, ISeo {}

export default function Custom500({ footer, _site }: I500) {
  return (
    <Page
      title="404"
      description="505 - Something went wrong"
      imageUrl={_site.globalSeo.fallbackSeo.image.url}
      imageHeight={_site.globalSeo.fallbackSeo.image.height}
      imageWidth={_site.globalSeo.fallbackSeo.image.width}
      twitterCard={_site.globalSeo.fallbackSeo.twittercard}
    >
      <Layout footer={footer}>
        <FiveOhOh />
      </Layout>
    </Page>
  );
}

export const getStaticProps = async () => {
  const { footer } = await getFooterData();
  const { _site } = await getSeoData();

  return {
    props: { footer, _site },
  };
};
