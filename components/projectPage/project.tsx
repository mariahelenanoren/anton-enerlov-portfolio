import { useState } from 'react';
import { Typography } from '@mui/material';
import { PaddingComponent } from '../paddingComponent';
import { useStyles } from './styles';
import { Image } from 'react-datocms';
import { ProjectInfo } from '../projectInfo';
import { ImageGrid } from '../imageGrid';
import { MoreIn } from '../moreIn';
import { IProject } from '../../lib/gql/project/types';
import { PreviewModal } from '../previewModal';
import { AnimationContainer } from '../animationContainer';

interface IProjectPage {
  project: IProject;
  allProjects: IProject[];
}

export default function ProjectPage({ project, allProjects }: IProjectPage) {
  const classes = useStyles();
  const [isPreviewOpen, setPreviewOpen] = useState(false);

  const handleClosePreview = () => {
    setPreviewOpen(false);
  };

  const handleOpenPreview = () => {
    if (!isPreviewOpen) {
      setPreviewOpen(true);
    }
  };

  return (
    <div className={classes.projectContainer}>
      <PaddingComponent>
        <div className={classes.titleContainer}>
          <Typography variant="overline">{project.categoryTitle}</Typography>
          <Typography variant="h1" textAlign={'center'}>
            {project.title}
          </Typography>
        </div>
      </PaddingComponent>
      <AnimationContainer>
        <PreviewModal
          image={project.featuredImage}
          isOpen={isPreviewOpen}
          handleClose={handleClosePreview}
          handleClick={handleOpenPreview}
        >
          <Image
            data={project.featuredImage.responsiveImage}
            className={classes.firstImage}
          />
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
      <ImageGrid images={project.images} />
      <MoreIn allProjects={allProjects} id={project.id} />
    </div>
  );
}
