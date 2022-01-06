import { Grid, Typography } from '@mui/material';
import classNames from 'classnames';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Image } from 'react-datocms';
import { PaddingComponent } from '..';
import { IProject } from '../../lib/gql/project/types';
import { useStyles } from './styles';

interface IMoreIn {
  allProjects: IProject[];
  id: string;
}

export default function MoreIn({ allProjects, id }: IMoreIn) {
  const classes = useStyles();
  const [suggestedProjects, setSuggestedProjects] = useState<IProject[]>([]);

  useEffect(() => {
    const filteredProjects = allProjects.filter((project) => project.id !== id);
    const shuffledProjects = filteredProjects.sort(() => 0.5 - Math.random());
    const projects = shuffledProjects.slice(0, 4);
    setSuggestedProjects(projects);
  }, [allProjects, id]);

  return (
    <>
      {suggestedProjects[0] ? (
        <PaddingComponent>
          <div className={classes.sectionContainer}>
            <Typography variant="overline">Photography</Typography>
            <Typography
              className={classes.title}
              variant="h2"
            >{`More in ${suggestedProjects[0].categoryTitle.toLowerCase()}`}</Typography>
            <Grid container direction="row" spacing={3}>
              {suggestedProjects.map((project, index) => (
                <Link key={index} href={project.id} passHref>
                  <Grid item xs={4} className={classes.grid}>
                    <Image
                      className={classes.image}
                      data={project.featuredImage.responsiveImage}
                    />
                    <div className={classes.overlay}>
                      <Typography variant="h4">{project.title}</Typography>
                    </div>
                  </Grid>
                </Link>
              ))}
            </Grid>
          </div>
        </PaddingComponent>
      ) : null}
    </>
  );
}
