import {
  getFooterData,
  getLifestylePageData,
  getOutdoorPageData,
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
  projectsByCategory: IProject[];
  project: IProject;
}

export default function ProjectPage({
  project,
  footer,
  projectsByCategory,
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
        <Project allProjects={projectsByCategory} project={project} />
      </Layout>
    </Page>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const { footer } = await getFooterData();
  const projectTitle = transformFromRoute(
    (context.params?.project as string) || ''
  );
  const { _site } = await getSeoData();

  const { outdoorPage } = await getOutdoorPageData();
  const { lifestylePage } = await getLifestylePageData();
  const outdoorProjects = outdoorPage.projects;
  const lifestyleProjects = lifestylePage.projects;

  let allProjects: IProject[] = [...outdoorProjects, ...lifestyleProjects];

  const project = allProjects.filter(
    (project) => project.title.toLowerCase() === projectTitle
  )[0];

  let projectsByCategory = [];

  if (project.categoryTitle.toLowerCase() === 'outdoor') {
    projectsByCategory = outdoorProjects;
  } else {
    projectsByCategory = lifestyleProjects;
  }

  return {
    props: { footer, project, projectsByCategory, _site },
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
