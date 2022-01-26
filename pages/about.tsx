import { Page } from '../layout/page';
import { About } from '../layout/about';
import { Layout } from '../layout/layout';
import { getAboutPageData, getFooterData } from '../lib/gql';
import { IFooter, IAbout } from '../lib/types';

interface IAboutPage extends IAbout, IFooter {}

export default function AboutPage({ aboutPage, footer }: IAboutPage) {
  return (
    <Page
      title="About"
      description="Anton Enerlöv is an action and outdoor photographer based in Stockholm. "
    >
      <Layout footer={footer}>
        <About aboutPage={aboutPage} />
      </Layout>
    </Page>
  );
}

export async function getStaticProps() {
  const { footer } = await getFooterData();
  const { aboutPage } = await getAboutPageData();

  return {
    props: { footer, aboutPage },
  };
}
