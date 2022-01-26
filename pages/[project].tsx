import {
  getFooterData,
  getLifestylePageData,
  getOutdoorPageData,
  getProjectData,
  getProjectsData,
} from '../lib/gql';
import { GetStaticPropsContext } from 'next';
import {
  transformFromRoute,
  transformToRoute,
} from '../lib/helpers/transformRoute';
import { IFooter, IProject } from '../lib/types';
import { Layout, Page, Project } from '../layout';

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
  const project: IProject = filteredProjects.allProjects[0];

  let allProjects;
  if (project.categoryTitle.toLowerCase() === 'outdoor') {
    const { outdoorPage } = await getOutdoorPageData();
    allProjects = outdoorPage.projects;
  } else {
    const { lifestylePage } = await getLifestylePageData();
    allProjects = lifestylePage.projects;
  }

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
