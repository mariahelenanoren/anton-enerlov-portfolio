
import { Grid, Typography } from "@mui/material";
import { IProjects } from "../../lib/gql";
import { PaddingComponent } from "../paddingComponent";
import { Image } from 'react-datocms';
import { useStyles } from "./styles";


export default function ProjectPage({allProjects} :IProjects) {
    const classes = useStyles();
    return (
        <PaddingComponent>
            
                <div>
                  {allProjects.map((project, index) => (
                      <div key={index}>
                          <div> 
                          <p>{project.categoryTitle}</p>
                          <Typography variant="h1" textAlign={'center'}>
                            {project.client}
                          </Typography>
                          </div>

                      <div className={classes.featuredImageContainer}>
                          <Image data={project.featuredImage.responsiveImage} />
                      </div>
                        
                      </div> 
                  ))},
                 </div>
                  </PaddingComponent>
                  


)


}