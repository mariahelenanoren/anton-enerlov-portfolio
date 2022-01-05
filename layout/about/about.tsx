import { Typography } from '@mui/material';
import { StructuredText } from 'react-datocms';
import { PaddingComponent, TextContainer } from '../../components';
import { IAboutPage } from '../../lib/gql';
import { useStyles } from './styles';

export default function About({ aboutPage }: IAboutPage) {
  const classes = useStyles();

  return (
    <PaddingComponent>
      <div className={classes.aboutContainer}>
        <Typography variant="h1">{aboutPage.title}</Typography>
        <TextContainer>
          <div className={classes.textContainer}>
            <Typography variant="body1">
              <StructuredText data={aboutPage.body.value} />
            </Typography>
          </div>
        </TextContainer>
        <div className={classes.videoContainer}>
          <iframe
            className={classes.video}
            src={`https://www.youtube.com/embed/${aboutPage.video.providerUid}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </PaddingComponent>
  );
}
