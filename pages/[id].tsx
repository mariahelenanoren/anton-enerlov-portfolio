import { getFooterData, getProjectData, IProjects } from '../lib/gql';
import { getProjectsData } from '../lib/gql';
import { IProject } from '../lib/gql/project/types';
import { ProjectPage as Project } from '../components/projectPage';
import { withRouter } from 'next/router';
import { GetServerSideProps } from 'next';

export default function ProjectPage({ project }: IProject) {
	return <>{project ? <Project project={project} /> : null}</>;
}

export async function getServerSideProps(context: any) {
	const { footer } = await getFooterData();
	const id = context.params.id;
	const { allProjects } = await getProjectData(id);
	const project = allProjects[0];

	return {
		props: { footer, project },
	};
}
