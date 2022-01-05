import { About } from '../layout/about';
import { getAboutPageData, getFooterData, IAboutPage } from '../lib/gql';

export default function AboutPage({ aboutPage }: IAboutPage) {
  return <About aboutPage={aboutPage} />;
}

export async function getStaticProps() {
  const { footer } = await getFooterData();
  const { aboutPage } = await getAboutPageData();

  return {
    props: { footer, aboutPage },
  };
}
