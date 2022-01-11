import {
	getFooterData,
	getProjectData,
	getProjectsData,
	IProjects,
} from '../lib/gql';
import { IProjectPage } from '../lib/gql/project/types';
import { ProjectPage as Project } from '../components/projectPage';
import { Layout } from '../layout/layout';
import { GetStaticPropsContext } from 'next';

export default function ProjectPage({ project, footer }: IProjectPage) {
	return (
		<Layout footer={footer}>
			{project ? <Project project={project} /> : null}
		</Layout>
	);
}

export async function getStaticProps(context: GetStaticPropsContext) {
	const { footer } = await getFooterData();
	const id = context.params?.id || '';
	const parsedId = id.toString();
	const { allProjects } = await getProjectData(parsedId);
	const project = allProjects[0];

	return {
		props: { footer, project },
	};
}

export async function getStaticPaths() {
	const { allProjects }: IProjects = await getProjectsData();
	const paths = allProjects.map((project) => ({ params: { id: project.id } }));

	return {
		paths: paths,
		fallback: false,
	};
}
