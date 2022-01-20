import {
  getFooterData,
  getLifestylePageData,
  getOutdoorPageData,
  getProjectData,
  getProjectsData,
} from '../lib/gql';
import { ProjectPage as Project } from '../components/projectPage';
import { Layout } from '../layout/layout';
import { GetStaticPropsContext } from 'next';
import { IFooter } from '../components/footer/types';
import { IProject } from '../lib/gql/project/types';
import {
  transformFromRoute,
  transformToRoute,
} from '../lib/helpers/transformRoute';
import { Page } from '../components';

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
    <Page
      title={project.title}
      description={`${project.title} in ${project.categoryTitle}.`}
    >
      <Layout footer={footer}>
        {project ? (
          <Project allProjects={allProjects} project={project} />
        ) : null}
      </Layout>
    </Page>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { footer } = await getFooterData();
  const projectTitle = transformFromRoute(
    (context.params?.project as string) || ''
  );
  const filteredProjects = await getProjectData(projectTitle);
  const project = filteredProjects.allProjects[0];
  const { allProjects } = await getProjectsData(project.categoryTitle);

  return {
    props: { footer, project, allProjects },
  };
}

export async function getStaticPaths() {
  const { outdoorPage } = await getOutdoorPageData();
  const { lifestylePage } = await getLifestylePageData();
  const outdoorProjects = outdoorPage.projects;
  const lifestyleProjects = lifestylePage.projects;
  const allProjects = [...outdoorProjects, ...lifestyleProjects];

  const paths = allProjects.map((project) => ({
    params: { project: transformToRoute(project.title) },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}
