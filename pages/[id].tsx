import { getFooterData, getProjectData, IProjects } from "../lib/gql";
import { getProjectsData } from "../lib/gql";
import { IProject } from "../lib/gql/project/types";
import { ProjectPage as Project } from "../components/projectPage";



export default function ProjectPage({project}: IProject) {
  // console.log(project)
    return (
      <>
      {project ?
      <Project project={project} />
     : null}
      </>
    
    )
}

export async function getStaticProps(context: any) {
    const { footer } = await getFooterData();
    const id = context.params.id.toString();
    const { allProjects } = await getProjectData(id);
    const project = allProjects[0];
    // console.log(project)
    return {
      props: { footer , project},
    };
  }
  
export async function getStaticPaths() {
    const { allProjects }:IProjects = await getProjectsData();
    const paths = allProjects.map((project) => ({params: { id: project.id}}))

    return {
      paths: paths,
      fallback: true,
    }
  }