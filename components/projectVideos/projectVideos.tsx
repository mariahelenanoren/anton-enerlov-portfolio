import { useStyles } from './styles';
import { IProjectVideo } from './types';

export default function ProjectVideo({ video, stopPrevention }: IProjectVideo) {
  const classes = useStyles();

  return (
    <div className={classes.videoContainer}>
      {stopPrevention ? <div className={classes.preventionDiv}></div> : null}
      <iframe
        onClick={(e) => {
          e.preventDefault();
          return false;
        }}
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
