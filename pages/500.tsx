import { FiveOhOh } from '../layout/500';
import { getFooterData } from '../lib/gql';

export default function Custom505() {
	return <FiveOhOh />;
}

export const getServerSideProps = async () => {
	const { footer } = await getFooterData();

	return {
		props: { footer },
	};
};
