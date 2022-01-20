import { Grid } from '@mui/material';
import { PaddingComponent } from '..';
import { IProjectImages } from './types';
import { Image } from 'react-datocms';
import { NoRightClick } from '..';

export default function ImageGrid({ images }: IProjectImages) {
	return (
		<>
			<PaddingComponent>
				<Grid container spacing={2}>
					{images.map((images, index) => (
						<Grid item xs={12} key={index}>
							<Image data={images.responsiveImage}></Image>
						</Grid>
					))}
				</Grid>
			</PaddingComponent>
		</>
	);
}
