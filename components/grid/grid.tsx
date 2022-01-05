import { Masonry } from '@mui/lab';
import { Paper, Typography } from '@mui/material';
import { Image } from 'react-datocms';
import { IProjects } from '../../lib/gql';
import { PaddingComponent } from '../paddingComponent';
import { useStyles } from './styles';

export default function Grid({ allProjects }: IProjects) {
  const classes = useStyles();

  return (
    <PaddingComponent>
      <div className={classes.mansonryContainer}>
        <Masonry columns={2} spacing={2}>
          {allProjects.map((project, index) => (
            <div key={index} className={classes.imageContainer}>
              <Image data={project.featuredImage.responsiveImage} />
              <div className={classes.overlay}>
                <Typography className={classes.text} variant="h4">
                  {project.title}
                </Typography>
              </div>
            </div>
          ))}
        </Masonry>
      </div>
    </PaddingComponent>
  );
}
