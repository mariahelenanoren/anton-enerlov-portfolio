import { getFooterData, getProjectData, getProjectsData } from '../lib/gql';
import { ProjectPage as Project } from '../components/projectPage';
import { Layout } from '../layout/layout';
import { GetStaticPropsContext } from 'next';
import { IFooter } from '../components/footer/types';
import { IProject } from '../lib/gql/project/types';

interface IProjectPage extends IFooter {
  allProjects: IProject[];
  project: IProject;
}

export default function ProjectPage({
  project,
  footer,
  allProjects,
}: IProjectPage) {
  return (
    <Layout footer={footer}>
      {project ? <Project allProjects={allProjects} project={project} /> : null}
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
    props: { footer, project, allProjects },
  };
}

export async function getStaticPaths() {
  const { allProjects }: { allProjects: IProject[] } = await getProjectsData();
  const paths = allProjects.map((project) => ({ params: { id: project.id } }));

  return {
    paths: paths,
    fallback: false,
  };
}
