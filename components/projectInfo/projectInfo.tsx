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
				<Grid
					container
					spacing={5}
					className={classes.infoContainer}
					direction={'row'}
				>
					<Grid item xs={3} className={classes.textGrid}>
						<Typography variant="body1">Client</Typography>
					</Grid>
					{client.map((c, index) => (
						<Typography
							key={index}
							variant="body1"
							className={classes.textGrid}
						>
							{c.name}
						</Typography>
					))}

					<Grid item xs={3}>
						<Typography variant="body1">Production Company</Typography>
					</Grid>
					{productionCompany.map((pc, index) => (
						<Typography
							key={index}
							variant="body1"
							className={classes.textGrid}
						>
							{pc.name}
						</Typography>
					))}
					<Grid item xs={3}>
						<Typography variant="body1">Models</Typography>
					</Grid>
					{model.map((m, index) => (
						<Typography
							key={index}
							variant="body1"
							className={classes.textGrid}
						>
							{m.name}
						</Typography>
					))}
					<Grid item xs={3}>
						<Typography variant="body1">Producer</Typography>
					</Grid>
					{producer.map((p, index) => (
						<Typography
							key={index}
							variant="body1"
							className={classes.textGrid}
						>
							{p.name}
						</Typography>
					))}
					<Grid item xs={3}>
						<Typography variant="body1">Agency</Typography>
					</Grid>
					{agency.map((a, index) => (
						<Typography
							key={index}
							variant="body1"
							className={classes.textGrid}
						>
							{a.name}
						</Typography>
					))}
					<Grid item xs={3}>
						<Typography variant="body1">Retouch</Typography>
					</Grid>
					{retouch.map((r, index) => (
						<Typography
							key={index}
							variant="body1"
							className={classes.textGrid}
						>
							{r.name}
						</Typography>
					))}
				</Grid>
			</>
		</PaddingComponent>
	);
}
