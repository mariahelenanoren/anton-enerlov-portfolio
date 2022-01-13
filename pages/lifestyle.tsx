import { Landing, Grid, Page } from '../components';
import { IFooter } from '../components/footer/types';
import { Layout } from '../layout/layout';
import { getFooterData, getLandingData, getProjectsData } from '../lib/gql';
import { ILanding } from '../lib/gql/landing';
import { IProject } from '../lib/gql/project/types';

interface ILifestylePage extends ILanding, IFooter {
  allProjects: IProject[];
}

export default function LifestylePage({
  landing,
  footer,
  allProjects,
}: ILifestylePage) {
  return (
    <Page
      title="Lifestyle"
      description="Lifestyle projects. Anton Enerlöv is an action and outdoor photographer based in Stockholm."
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
  const { allProjects } = await getProjectsData('Lifestyle');
  const { footer } = await getFooterData();

  return {
    props: { landing, allProjects, footer },
  };
}
