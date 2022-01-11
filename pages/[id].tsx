import { getFooterData, getProjectData } from '../lib/gql';
import { IProjectPage } from '../lib/gql/project/types';
import { ProjectPage as Project } from '../components/projectPage';
import { Layout } from '../layout/layout';

export default function ProjectPage({ project, footer }: IProjectPage) {
	return (
		<Layout footer={footer}>
			{project ? <Project project={project} /> : null}
		</Layout>
	);
}

export async function getStaticProps(context: any) {
	const { footer } = await getFooterData();
	const id = context.params.id;
	const { allProjects } = await getProjectData(id);
	const project = allProjects[0];

	return {
		props: { footer, project },
	};
}
