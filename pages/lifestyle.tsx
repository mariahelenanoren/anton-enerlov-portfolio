import { Page, Layout, Landing, PortfolioGrid } from '../layout';
import {
  getFooterData,
  getLandingData,
  getLifestylePageData,
  getSeoData,
} from '../lib/gql';
import { IProject, ILanding, IFooter, ISeo } from '../lib/types';

interface ILifestylePage extends ILanding, IFooter, ISeo {
  lifestylePage: {
    projects: IProject[];
  };
}

export default function LifestylePage({
  landing,
  footer,
  lifestylePage,
  _site,
}: ILifestylePage) {
  return (
    <Page
      title={`${_site.globalSeo.fallbackSeo.title} | Lifestyle`}
      description={_site.globalSeo.fallbackSeo.description}
      imageUrl={_site.globalSeo.fallbackSeo.image.url}
      imageHeight={_site.globalSeo.fallbackSeo.image.height}
      imageWidth={_site.globalSeo.fallbackSeo.image.width}
      twitterCard={_site.globalSeo.fallbackSeo.twittercard}
    >
      <Layout footer={footer}>
        <Landing landing={landing} />
        <PortfolioGrid projects={lifestylePage.projects} />
      </Layout>
    </Page>
  );
}

export async function getStaticProps() {
  const { landing } = await getLandingData();
  const { lifestylePage } = await getLifestylePageData();
  const { footer } = await getFooterData();
  const { _site } = await getSeoData();

  return {
    props: { landing, lifestylePage, footer, _site },
  };
}
