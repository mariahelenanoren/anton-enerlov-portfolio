import { Landing, Grid } from '../components';
import { IFooter } from '../components/footer/types';
import { Layout } from '../layout/layout';
import {
	getFooterData,
	getLandingData,
	getProjectsData,
	IProjects,
} from '../lib/gql';
import { ILanding } from '../lib/gql/landing';

interface ILifestylePage extends ILanding, IProjects, IFooter {}

export default function LifestylePage({
	landing,
	footer,
	allProjects,
}: ILifestylePage) {
	return (
		<Layout footer={footer}>
			<Landing landing={landing} />
			<Grid allProjects={allProjects} />
		</Layout>
	);
}

export async function getStaticProps() {
	const { landing } = await getLandingData();
	const { allProjects } = await getProjectsData('Lifestyle');
	const { footer } = await getFooterData();

	return {
		props: { landing, allProjects, footer },
	};
}
