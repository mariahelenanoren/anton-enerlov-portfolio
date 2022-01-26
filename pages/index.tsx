import { Page, Landing, Layout, PortfolioGrid } from '../layout';
import {
  getLandingData,
  getFooterData,
  getOutdoorPageData,
  getSeoData,
} from '../lib/gql';
import { IProject, ILanding, IFooter, ISeo } from '../lib/types';

interface IOutdoorPage extends ILanding, IFooter, ISeo {
  outdoorPage: {
    projects: IProject[];
  };
}

export default function OutdoorPage({
  landing,
  footer,
  outdoorPage,
  _site,
}: IOutdoorPage) {
  return (
    <Page
      title={`${_site.globalSeo.fallbackSeo.title} | Outdoor`}
      description={_site.globalSeo.fallbackSeo.description}
      imageUrl={_site.globalSeo.fallbackSeo.image.url}
      imageHeight={_site.globalSeo.fallbackSeo.image.height}
      imageWidth={_site.globalSeo.fallbackSeo.image.width}
      twitterCard={_site.globalSeo.fallbackSeo.twittercard}
    >
      <Layout footer={footer}>
        <Landing landing={landing} />
        <PortfolioGrid projects={outdoorPage.projects} />
      </Layout>
    </Page>
  );
}

export async function getStaticProps() {
  const { landing } = await getLandingData();
  const { outdoorPage } = await getOutdoorPageData();
  const { footer } = await getFooterData();
  const { _site } = await getSeoData();

  return {
    props: { landing, footer, outdoorPage, _site },
  };
}
