import { Masonry } from '@mui/lab';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
import Link from 'next/link';
import { Image } from 'react-datocms';
import { transformToRoute } from '../../lib/helpers/transformRoute';
import { AnimationContainer } from '../../components/animationContainer';
import { PaddingComponent } from '../../components/paddingComponent';
import { useStyles } from './styles';
import { IGrid } from './types';

export default function Grid({ projects }: IGrid) {
	const classes = useStyles();
	const theme = useTheme();
	const mobile = useMediaQuery(theme.breakpoints.only('xs'));

	return (
		<PaddingComponent>
			<div className={classes.mansonryContainer}>
				<Masonry columns={mobile ? 1 : 2} spacing={2}>
					{projects.map((project, index) => (
						<AnimationContainer key={index}>
							<Link
								href={`/${transformToRoute(project.title)}`}
								key={index}
								passHref
							>
								<div className={classes.imageContainer}>
									<Image data={project.featuredImage.responsiveImage} />
									<div className={classes.overlay}>
										<Typography className={classes.text} variant="h3">
											{project.title}
										</Typography>
									</div>
								</div>
							</Link>
						</AnimationContainer>
					))}
				</Masonry>
			</div>
		</PaddingComponent>
	);
}
