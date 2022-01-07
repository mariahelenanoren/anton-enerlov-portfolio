import { getFooterData, getProjectData, IProjects } from '../lib/gql';
import { getProjectsData } from '../lib/gql';
import { IProject } from '../lib/gql/project/types';
import { ProjectPage as Project } from '../components/projectPage';

export interface IProjectPage extends IProject {}

export default function ProjectPage({
  project,
  allProjects,
}: {
  project: IProject;
  allProjects: IProject[];
}) {
  return (
    <>
      {project ? <Project allProjects={allProjects} project={project} /> : null}
    </>
  );
}

export async function getStaticProps(context: any) {
  const { footer } = await getFooterData();

  const id = context.params.id.toString();
  const filteredProjects = await getProjectData(id);
  const project = filteredProjects.allProjects[0];

  const { allProjects } = await getProjectsData(project.categoryTitle);

  return {
    props: { footer, project, allProjects },
  };
}

export async function getStaticPaths() {
  const { allProjects }: { allProjects: IProjects[] } = await getProjectsData();
  const paths = allProjects.map((project) => ({ params: { id: project.id } }));

  return {
    paths: paths,
    fallback: true,
  };
}
