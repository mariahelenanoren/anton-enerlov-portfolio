import { Grid, Typography } from '@mui/material';
import { PaddingComponent } from '../paddingComponent';
import { useStyles } from './styles';
import { Image } from 'react-datocms';
import { ProjectTextContainer } from '../projectTextContainer';
import { ProjectInfo } from '../projectInfo';
import { ImageGrid } from '../imageGrid';
import { MoreIn } from '../moreIn';
import { IProject } from '../../lib/gql/project/types';

interface IProjectPage {
  project: IProject;
  allProjects: IProject[];
}

export default function ProjectPage({ project, allProjects }: IProjectPage) {
  const classes = useStyles();

  return (
    <div className={classes.projectContainer}>
      <PaddingComponent>
        <div className={classes.titleContainer}>
          <Typography variant="overline">{project.categoryTitle}</Typography>
          <Typography variant="h2" textAlign={'center'}>
            {project.title}
          </Typography>
        </div>
      </PaddingComponent>
      <Image
        data={project.featuredImage.responsiveImage}
        className={classes.firstImage}
      />
      <ProjectInfo
        client={project.client}
        productionCompany={project.productionCompany}
        model={project.model}
        producer={project.producer}
        agency={project.agency}
        retouch={project.retouch}
      />
      <ProjectTextContainer></ProjectTextContainer>
      <ImageGrid images={project.images} />
      <MoreIn allProjects={allProjects} id={project.id} />
    </div>
  );
}