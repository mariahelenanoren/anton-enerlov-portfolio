import { IFooter } from '../components/footer/types';
import { FiveOhOh } from '../layout/500';
import { Layout } from '../layout/layout';
import { getFooterData } from '../lib/gql';

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
