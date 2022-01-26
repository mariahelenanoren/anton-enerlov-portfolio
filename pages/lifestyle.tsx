import { Page, Layout, Landing, PortfolioGrid } from '../layout';
import {
  getFooterData,
  getLandingData,
  getLifestylePageData,
} from '../lib/gql';
import { IProject, ILanding, IFooter } from '../lib/types';

interface ILifestylePage extends ILanding, IFooter {
  lifestylePage: {
    projects: IProject[];
  };
}

export default function LifestylePage({
  landing,
  footer,
  lifestylePage,
}: ILifestylePage) {
  return (
    <Page
      title="Lifestyle"
      description="Lifestyle projects. Anton Enerlöv is an action and outdoor photographer based in Stockholm."
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

  return {
    props: { landing, lifestylePage, footer },
  };
}
