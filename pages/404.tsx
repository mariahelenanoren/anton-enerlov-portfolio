import { FourOhFour } from '../layout/404';
import { getFooterData } from '../lib/gql';

export default function Custom404() {
  return <FourOhFour />;
}

export const getStaticProps = async () => {
  const { footer } = await getFooterData();

  return {
    props: { footer },
  };
};
