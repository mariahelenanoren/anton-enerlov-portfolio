import React from 'react';
import { Grid, Link, Typography } from '@mui/material';
import { Image } from 'react-datocms';

import { ILanding } from '../../lib/gql/landing';
import { PaddingComponent } from '../paddingComponent';
import { useStyles } from './styles';

export default function Landing({ landing }: ILanding) {
	const classes = useStyles();
	return (
		<div className={classes.landingContainer}>
			<div className={classes.landingInner}>
				<div className={classes.imageContainer}>
					{landing.backgroundImage ? (
						<Image
							data={landing.backgroundImage.responsiveImage}
							className={classes.image}
						/>
					) : null}
				</div>
				<div className={classes.overlay}></div>
				<div className={classes.gradient}></div>
				<div className={classes.contentContainer}>
					<PaddingComponent>
						<Grid container spacing={2} direction={'column'}>
							<Grid item>
								<Typography variant="h1" textAlign={'center'}>
									{landing.title}
								</Typography>
							</Grid>
							<Grid item>
								<Typography variant="body1" textAlign={'center'}>
									{landing.subtitle}
								</Typography>
							</Grid>
							<Grid item className={classes.iconContainer}>
								{landing.socialLinks.map((link, index) => (
									<Link href={link.link} key={index} className={classes.link}>
										<Image
											data={link.icon.responsiveImage}
											className={classes.icon}
										/>
									</Link>
								))}
							</Grid>
						</Grid>
					</PaddingComponent>
				</div>
			</div>
		</div>
	);
}
