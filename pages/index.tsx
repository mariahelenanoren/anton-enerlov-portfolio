import { Landing, Grid } from '../components';
import { IFooter } from '../components/footer/types';
import { Layout } from '../layout/layout';
import {
	getLandingData,
	getFooterData,
	getProjectsData,
	IProjects,
} from '../lib/gql';
import { ILanding } from '../lib/gql/landing/types';

interface IOutdoorPage extends ILanding, IFooter, IProjects {}

export default function OutdoorPage({
	landing,
	footer,
	allProjects,
}: IOutdoorPage) {
	return (
		<Layout footer={footer}>
			<Landing landing={landing} />
			<Grid allProjects={allProjects} />
		</Layout>
	);
}

export async function getStaticProps() {
	const { landing } = await getLandingData();
	const { allProjects } = await getProjectsData('Outdoor');
	const { footer } = await getFooterData();

	return {
		props: { landing, footer, allProjects },
	};
}
