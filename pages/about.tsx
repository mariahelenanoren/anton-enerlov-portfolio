import { About } from '../layout/about';
import { Layout } from '../layout/layout';
import { getAboutPageData, getFooterData, IAboutPage } from '../lib/gql';

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
