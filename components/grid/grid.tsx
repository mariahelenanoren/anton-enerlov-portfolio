import { Masonry } from '@mui/lab';
import { Paper, Typography } from '@mui/material';
import Link from 'next/link';
import { Image } from 'react-datocms';
import { PaddingComponent } from '../paddingComponent';
import { useStyles } from './styles';
import { IGrid } from './types';

export default function Grid({ allProjects }: IGrid) {
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
