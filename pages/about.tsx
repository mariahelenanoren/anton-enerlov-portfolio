import { IFooter } from '../components/footer/types';
import { About } from '../layout/about';
import { Layout } from '../layout/layout';
import { getAboutPageData, getFooterData } from '../lib/gql';
import { IAbout } from '../lib/gql/about/types';

interface IAboutPage extends IAbout, IFooter {}

export default function AboutPage({ aboutPage, footer }: IAboutPage) {
  return (
    <Layout footer={footer}>
      <About aboutPage={aboutPage} />
    </Layout>
  );
}

export async function getStaticProps() {
  const { footer } = await getFooterData();
  const { aboutPage } = await getAboutPageData();

  return {
    props: { footer, aboutPage },
  };
}
