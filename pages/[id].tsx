import { getFooterData, getProjectData, IProjects } from "../lib/gql";
import { getProjectsData } from "../lib/gql";



export default function ProjectPage() {
    return (
        <div>
            
        </div>
    )
}

export async function getStaticProps(context: any) {
    const { footer } = await getFooterData();
    const id = context.params.id.toString();
    const { allProjects } = await getProjectData(id);
    console.log(allProjects)
    return {
      props: { footer },
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