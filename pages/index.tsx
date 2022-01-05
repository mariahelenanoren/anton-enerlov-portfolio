import { Landing, Footer } from '../components';
import { IFooter } from '../components/footer/types';
import { getLandingData, getFooterData } from '../lib/gql';
import { ILanding } from '../lib/gql/landing/types';

interface IOutdoorPage extends ILanding {}

export default function OutdoorPage({ landing }: IOutdoorPage) {
  return (
    <>
      <Landing landing={landing} />
    </>
  );
}

export async function getStaticProps() {
  const { landing } = await getLandingData();
  const { footer } = await getFooterData();

  return {
    props: { landing, footer },
  };
}
