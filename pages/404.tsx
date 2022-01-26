import { Layout, FourOhFour } from '../layout';
import { getFooterData } from '../lib/gql';
import { IFooter } from '../lib/types';

export default function Custom404({ footer }: IFooter) {
  return (
    <Layout footer={footer}>
      <FourOhFour />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const { footer } = await getFooterData();

  return {
    props: { footer },
  };
};
