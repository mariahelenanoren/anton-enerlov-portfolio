import { Masonry } from '@mui/lab';
import { Paper } from '@mui/material';
import { Image } from 'react-datocms';
import { IProjects } from '../../lib/gql';
import { PaddingComponent } from '../paddingComponent';

export default function Grid({ allProjects }: IProjects) {
  return (
    <PaddingComponent>
      <Masonry columns={2} spacing={1}>
        {allProjects.map((project, index) => (
          <Image key={index} data={project.featuredImage.responsiveImage} />
        ))}
      </Masonry>
    </PaddingComponent>
  );
}
