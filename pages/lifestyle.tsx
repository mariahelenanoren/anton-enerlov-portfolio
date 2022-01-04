import { Landing } from '../components';
import { getLandingData } from '../lib/gql';
import { ILanding } from '../lib/gql/landing';

export default function LifestylePage({ landing }: ILanding) {
  return (
    <>
      <Landing landing={landing} />
    </>
  );
}

export async function getStaticProps() {
  const { landing } = await getLandingData();
  return {
    props: { landing },
  };
}
