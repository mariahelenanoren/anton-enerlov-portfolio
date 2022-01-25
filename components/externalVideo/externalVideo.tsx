import { useStyles } from './styles';
import { IExternalVideo } from './types';

export default function ExternalVideo({ video, preventPlay }: IExternalVideo) {
  const classes = useStyles();

  return (
    <div className={classes.videoContainer}>
      {preventPlay ? <div className={classes.preventionDiv}></div> : null}
      <iframe
        className={classes.projectvideo}
        src={`https://www.youtube.com/embed/${video.providerUid}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
