import { Landing, PortfolioGrid, Page } from '../components';
import { Layout } from '../layout/layout';
import { getLandingData, getFooterData, getOutdoorPageData } from '../lib/gql';
import { IProject, ILanding, IFooter } from '../lib/types';

interface IOutdoorPage extends ILanding, IFooter {
  outdoorPage: {
    projects: IProject[];
  };
}

export default function OutdoorPage({
  landing,
  footer,
  outdoorPage,
}: IOutdoorPage) {
  return (
    <Page
      title="Outdoor"
      description="Outdoor and action projects. Anton Enerlöv is an action and outdoor photographer based in Stockholm."
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

  return {
    props: { landing, footer, outdoorPage },
  };
}
