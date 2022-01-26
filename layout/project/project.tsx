import { Typography } from '@mui/material';
import { PaddingComponent } from '../../components/paddingComponent';
import { useStyles } from './styles';
import { Image } from 'react-datocms';
import { ProjectInfo } from '../../components/projectInfo';
import { MediaGrid } from '../../components/mediaGrid';
import { MoreIn } from '../../components/moreIn';
import { PreviewModal } from '../../components/previewModal';
import { AnimationContainer } from '../../components/animationContainer';
import { DisableCopy } from '../../components/disableCopy';
import { IProjectPage } from './types';

export default function Project({ project, allProjects }: IProjectPage) {
  const classes = useStyles();

  return (
    <div className={classes.projectContainer}>
      <PaddingComponent>
        <div className={classes.titleContainer}>
          <Typography variant="h1" textAlign={'center'}>
            {project.title}
          </Typography>
        </div>
      </PaddingComponent>
      <AnimationContainer>
        <PreviewModal image={project.featuredImage}>
          <DisableCopy>
            <Image
              data={project.featuredImage.responsiveImage}
              className={classes.firstImage}
            />
          </DisableCopy>
        </PreviewModal>
      </AnimationContainer>
      <ProjectInfo
        client={project.client}
        productionCompany={project.productionCompany}
        model={project.model}
        product={project.product}
        producer={project.producer}
        agency={project.agency}
        retouch={project.retouch}
      />
      <MediaGrid images={project.images} videos={project.videos} />
      <MoreIn allProjects={allProjects} id={project.id} />
    </div>
  );
}
