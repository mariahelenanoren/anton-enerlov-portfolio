import {
  getFooterData,
  getLifestylePageData,
  getOutdoorPageData,
  getProjectData,
  getSeoData,
} from '../lib/gql';
import { GetStaticPropsContext } from 'next';
import {
  transformFromRoute,
  transformToRoute,
} from '../lib/helpers/transformRoute';
import { IFooter, IProject, ISeo } from '../lib/types';
import { Layout, Page, Project } from '../layout';

interface IProjectPage extends IFooter, ISeo {
  allProjects: IProject[];
  project: IProject;
}

export default function ProjectPage({
  project,
  footer,
  allProjects,
  _site,
}: IProjectPage) {
  return (
    <Page
      title={project.title}
      description={_site.globalSeo.fallbackSeo.description}
      imageUrl={
        project.featuredImage.responsiveImage.src ||
        _site.globalSeo.fallbackSeo.image.url
      }
      imageHeight={
        project.featuredImage.responsiveImage.height ||
        _site.globalSeo.fallbackSeo.image.height
      }
      imageWidth={
        project.featuredImage.responsiveImage.width ||
        _site.globalSeo.fallbackSeo.image.width
      }
      twitterCard={_site.globalSeo.fallbackSeo.twittercard}
    >
      <Layout footer={footer}>
        <Project allProjects={allProjects} project={project} />
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
  const { _site } = await getSeoData();

  let allProjects;
  if (project.categoryTitle.toLowerCase() === 'outdoor') {
    const { outdoorPage } = await getOutdoorPageData();
    allProjects = outdoorPage.projects;
  } else {
    const { lifestylePage } = await getLifestylePageData();
    allProjects = lifestylePage.projects;
  }

  return {
    props: { footer, project, allProjects, _site },
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
