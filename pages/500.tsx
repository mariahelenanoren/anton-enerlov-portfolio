import { FiveOhOh } from '../layout/500';
import { Layout } from '../layout/layout';
import { getFooterData } from '../lib/gql';
import { IFooter } from '../lib/types';

export default function Custom500({ footer }: IFooter) {
  return (
    <Layout footer={footer}>
      <FiveOhOh />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const { footer } = await getFooterData();

  return {
    props: { footer },
  };
};
