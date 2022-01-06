import { Masonry } from '@mui/lab';
import { Paper, Typography } from '@mui/material';
import Link from 'next/link';
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
            <Link key={index} href={project.id} passHref>
            <div className={classes.imageContainer}>
              <Image data={project.featuredImage.responsiveImage} />
              <div className={classes.overlay}>
                <Typography className={classes.text} variant="h4">
                  {project.title}
                </Typography>
              </div>
            </div>
         
            </Link>
          ))}
        </Masonry>
      </div>
    </PaddingComponent>
  );
}
