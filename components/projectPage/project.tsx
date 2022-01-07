import { Grid, Typography } from "@mui/material";
import { IProject } from "../../lib/gql/project/types";
import { PaddingComponent } from "../paddingComponent";
import { useStyles } from "./styles";
import { Image } from 'react-datocms';
import { ProjectTextContainer } from "../projectTextContainer";
import { ProjectInfo } from "../projectInfo";

export default function ProjectPage({project}: IProject) {
	const classes = useStyles();

	return (
    <div className={classes.projectContainer}>
		<PaddingComponent>
                <div className={classes.titleContainer}>
                <p className={classes.category}>{project.categoryTitle}</p>
                    <Typography variant="h2" textAlign={'center'}>
                        {project.title}
                    </Typography>
                </div>
        </PaddingComponent>
              <Grid container spacing={1}>
              <Image
                      data={project.featuredImage.responsiveImage}
                      className={classes.firstImage}
                    />
              </Grid>
             <ProjectTextContainer>
                    <ProjectInfo 
                       client={project.client}
                       productionCompany={project.productionCompany}
                       model={project.model}
                       producer={project.producer}
                       agency={project.agency}
                       retouch={project.retouch}
                    />                
             </ProjectTextContainer> 
            </div>
	);

}
