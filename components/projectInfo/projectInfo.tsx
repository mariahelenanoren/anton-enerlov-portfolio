import { Grid, Typography } from "@mui/material";
import { PaddingComponent } from "../paddingComponent";
import { useStyles } from "./styles";
import { IProjectInfo } from "./types";

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
			<div className={classes.infoContainer}>
				<Typography variant="body1" textAlign={"center"}>
					Client
				</Typography>
				{client.map((c, index) => (
					<Typography key={index} variant="body1" textAlign={"center"}>
						{c.name}
					</Typography>
				))}
				<Typography variant="body1" textAlign={"center"}>
					Production Company
				</Typography>
				{productionCompany.map((pc, index) => (
					<Typography key={index} variant="body1" textAlign={"center"}>
						{pc.name}
					</Typography>
				))}
				<Typography variant="body1" textAlign={"center"}>
					Model
				</Typography>
				{model.map((m, index) => (
					<Typography key={index} variant="body1" textAlign={"center"}>
						{m.name}
					</Typography>
				))}
				<Typography variant="body1" textAlign={"center"}>
					Producer
				</Typography>
				{producer.map((p, index) => (
					<Typography key={index} variant="body1" textAlign={"center"}>
						{p.name}
					</Typography>
				))}
				<Typography variant="body1" textAlign={"center"}>
					Agency
				</Typography>
				{agency.map((a, index) => (
					<Typography key={index} variant="body1" textAlign={"center"}>
						{a.name}
					</Typography>
				))}
				<Typography variant="body1" textAlign={"center"}>
					Retouch
				</Typography>
				{retouch.map((r, index) => (
					<Typography key={index} variant="body1" textAlign={"center"}>
						{r.name}
					</Typography>
				))}
			</div>
		</PaddingComponent>
	);
}
