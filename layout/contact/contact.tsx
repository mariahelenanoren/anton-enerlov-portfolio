import { Typography } from '@mui/material';
import { StructuredText } from 'react-datocms';
import { PaddingComponent } from '../../components/paddingComponent';
import { TextContainer } from '../../components/textContainer';
import { IContact } from '../../lib/types';
import { useStyles } from './styles';

export default function Contact({ contactPage }: IContact) {
  const classes = useStyles();

  return (
    <PaddingComponent>
      <Typography
        variant="h1"
        textAlign={'center'}
        className={classes.contactTitle}
      >
        {contactPage.title}
      </Typography>
      <TextContainer>
        <StructuredText data={contactPage.body.value} />
      </TextContainer>
    </PaddingComponent>
  );
}
