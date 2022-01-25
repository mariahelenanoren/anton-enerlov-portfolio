import { useStyles } from './styles';
import { IProjectVideo } from './types';

export default function ProjectVideo({ video }: IProjectVideo) {
	const classes = useStyles();
	console.log(video);
	return (
		<>
			<div className={classes.videoContainer}>
				<iframe
					className={classes.projectvideo}
					src={`https://www.youtube.com/embed/${video.providerUid}`}
					title="YouTube video player"
					frameBorder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowFullScreen
				></iframe>
			</div>
		</>
	);
}
