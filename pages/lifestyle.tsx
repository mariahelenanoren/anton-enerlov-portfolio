import { Landing, Grid } from '../components';
import {
  getFooterData,
  getLandingData,
  getProjectsData,
  IProjects,
} from '../lib/gql';
import { ILanding } from '../lib/gql/landing';

interface ILifestylePage extends ILanding, IProjects {}

export default function LifestylePage({
  landing,
  allProjects,
}: ILifestylePage) {
  return (
    <>
      <Landing landing={landing} />
      <Grid allProjects={allProjects} />
    </>
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
