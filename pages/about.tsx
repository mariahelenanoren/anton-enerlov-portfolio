import { Page, Layout, About } from '../layout';
import { getAboutPageData, getFooterData, getSeoData } from '../lib/gql';
import { IFooter, IAbout, ISeo } from '../lib/types';

interface IAboutPage extends IAbout, IFooter, ISeo {}

export default function AboutPage({ aboutPage, footer, _site }: IAboutPage) {
  return (
    <Page
      title="About"
      description={_site.globalSeo.fallbackSeo.description}
      imageUrl={_site.globalSeo.fallbackSeo.image.url}
      imageHeight={_site.globalSeo.fallbackSeo.image.height}
      imageWidth={_site.globalSeo.fallbackSeo.image.width}
      twitterCard={_site.globalSeo.fallbackSeo.twittercard}
    >
      <Layout footer={footer}>
        <About aboutPage={aboutPage} />
      </Layout>
    </Page>
  );
}

export async function getStaticProps() {
  const { footer } = await getFooterData();
  const { aboutPage } = await getAboutPageData();
  const { _site } = await getSeoData();

  return {
    props: { footer, aboutPage, _site },
  };
}
