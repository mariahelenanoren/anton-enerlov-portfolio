import { Grid, Typography } from '@mui/material';
import classNames from 'classnames';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Image } from 'react-datocms';
import { PaddingComponent } from '..';
import { IProject } from '../../lib/gql/project/types';
import { transformToRoute } from '../../lib/helpers/transformRoute';
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
    const projects = shuffledProjects.slice(0, 3);
    setSuggestedProjects(projects);
  }, [allProjects, id]);

  return (
    <>
      {suggestedProjects[0] ? (
        <PaddingComponent>
          <div className={classes.moreInContainer}>
            <Typography
              className={classes.title}
              variant="h2"
            >{`More in ${suggestedProjects[0].categoryTitle.toLowerCase()}`}</Typography>
            <Grid container direction="row" spacing={3}>
              {suggestedProjects.map((project, index) => (
                <Link
                  key={index}
                  href={`/${transformToRoute(project.title)}`}
                  passHref
                >
                  <Grid item xs={12} md={4}>
                    <div className={classes.itemContent}>
                      <Image
                        className={classNames(classes.image, 'image')}
                        data={project.featuredImage.responsiveImage}
                      />
                      <div className={classes.overlay}>
                        <Typography
                          variant="h3"
                          className={classes.projectTitle}
                        >
                          {project.title}
                        </Typography>
                      </div>
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
