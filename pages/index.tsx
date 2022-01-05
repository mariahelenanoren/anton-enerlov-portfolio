import { Landing, Footer } from '../components';
import { IFooter } from '../components/footer/types';
import { getLandingData, getFooterData, getProjectsData } from '../lib/gql';
import { ILanding } from '../lib/gql/landing/types';

interface IOutdoorPage extends ILanding, IFooter {}

export default function OutdoorPage({ landing, footer }: IOutdoorPage) {
  return (
    <>
      <Landing landing={landing} />
      <Footer footer={footer} />
    </>
  );
}

export async function getStaticProps() {
  const { landing } = await getLandingData();
  const { allProjects } = await getProjectsData('Outdoor');
  const { footer } = await getFooterData();

  return {
    props: { landing, footer },
  };
}
