import { Landing, Footer, Grid } from '../components';
import { IFooter } from '../components/footer/types';
import {
  getLandingData,
  getFooterData,
  getProjectsData,
  IProjects,
} from '../lib/gql';
import { ILanding } from '../lib/gql/landing/types';

interface IOutdoorPage extends ILanding, IFooter, IProjects {}

export default function OutdoorPage({
  landing,
  footer,
  allProjects,
}: IOutdoorPage) {
  return (
    <>
      <Landing landing={landing} />
      <Grid allProjects={allProjects} />
    </>
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
