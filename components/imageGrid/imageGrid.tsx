import { Grid } from '@mui/material';
import { PaddingComponent } from '..';
import { useStyles } from './styles';
import { IProjectImages } from './types';
import { Image } from 'react-datocms';

export default function ImageGrid({ images }: IProjectImages) {
	const classes = useStyles();

	return (
		<PaddingComponent>
			<>
				<Grid container spacing={3} className={classes.gridContainer}>
					<Image data={images.responsiveImage}></Image>
				</Grid>
			</>
		</PaddingComponent>
	);
}
