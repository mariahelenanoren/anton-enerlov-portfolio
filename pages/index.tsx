import { Landing, Grid, Page } from '../components';
import { IFooter } from '../components/footer/types';
import { Layout } from '../layout/layout';
import { getLandingData, getFooterData, getProjectsData } from '../lib/gql';
import { ILanding } from '../lib/gql/landing/types';
import { IProject } from '../lib/gql/project/types';

interface IOutdoorPage extends ILanding, IFooter {
  allProjects: IProject[];
}

export default function OutdoorPage({
  landing,
  footer,
  allProjects,
}: IOutdoorPage) {
  return (
    <Page
      title="Outdoor"
      description="Outdoor and action projects. Anton Enerlöv is an action and outdoor photographer based in Stockholm."
    >
      <Layout footer={footer}>
        <Landing landing={landing} />
        <Grid allProjects={allProjects} />
      </Layout>
    </Page>
  );
}

export async function getStaticProps() {
  const { landing } = await getLandingData();
  const { allProjects } = await getProjectsData('Outdoor');
  const { footer } = await getFooterData();

  return {
    props: { landing, footer, allProjects },
  };
}
