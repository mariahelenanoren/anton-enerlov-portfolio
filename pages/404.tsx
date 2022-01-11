import { IFooter } from '../components/footer/types';
import { FourOhFour } from '../layout/404';
import { Layout } from '../layout/layout';
import { getFooterData } from '../lib/gql';

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
