import { Grid, Typography } from '@mui/material';
import { PaddingComponent } from '../paddingComponent';
import { useStyles } from './styles';
import { IProjectInfo } from './types';

export default function ProjectInfo({
	client,
	productionCompany,
	model,
	producer,
	agency,
	retouch,
}: IProjectInfo) {
	const classes = useStyles();
	console.log(client);
	return (
		<PaddingComponent>
			<>
				<div className={classes.infoContainer}>
					<Grid container spacing={1} direction={'row'}>
						<Grid item xs={4}>
							?<Typography variant="body1">Client</Typography>
						</Grid>
						{client.map((c, index) => (
							<Typography key={index} variant="body1" className={classes.text}>
								{c.name}
							</Typography>
						))}

						<Grid item xs={4}>
							<Typography variant="body1">Production Company</Typography>
						</Grid>
						{productionCompany.map((pc, index) => (
							<Typography key={index} variant="body1" className={classes.text}>
								{pc.name}
							</Typography>
						))}
						<Grid item xs={4}>
							<Typography variant="body1">Models</Typography>
						</Grid>
						{model.map((m, index) => (
							<Typography key={index} variant="body1" className={classes.text}>
								{m.name}
							</Typography>
						))}
						<Grid item xs={4}>
							<Typography variant="body1">Producer</Typography>
						</Grid>
						{producer.map((p, index) => (
							<Typography key={index} variant="body1" className={classes.text}>
								{p.name}
							</Typography>
						))}
						<Grid item xs={4}>
							<Typography variant="body1">Agency</Typography>
						</Grid>
						{agency.map((a, index) => (
							<Typography key={index} variant="body1" className={classes.text}>
								{a.name}
							</Typography>
						))}
						<Grid item xs={4}>
							<Typography variant="body1">Retouch</Typography>
						</Grid>
						{retouch.map((r, index) => (
							<Typography key={index} variant="body1" className={classes.text}>
								{r.name}
							</Typography>
						))}
					</Grid>
				</div>
			</>
		</PaddingComponent>
	);
}
