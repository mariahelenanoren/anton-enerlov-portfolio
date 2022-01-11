import { Grid } from '@mui/material';
import { PaddingComponent } from '..';
import { IProjectImages } from './types';
import { Image } from 'react-datocms';

export default function ImageGrid({ images }: IProjectImages) {
	return (
		<PaddingComponent>
			{images.map((images, index) => (
				<Grid container spacing={1} key={index}>
					<Grid item xs={12}>
						<Image data={images.responsiveImage}></Image>
					</Grid>
				</Grid>
			))}
		</PaddingComponent>
	);
}
