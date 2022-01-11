import { Box } from '@mui/material';
import { StructuredText } from 'react-datocms';
import { IContact } from '../../lib/gql/contact/types';
import { PaddingComponent } from '../paddingComponent';
import { useStyles } from './styles';

export default function Contact({ contactPage }: IContact) {
  const classes = useStyles();

  return (
    <>
      <PaddingComponent>
        <p className={classes.contactTitle}>{contactPage.title}</p>
        <div className={classes.contactContainer}>
          <Box>
            <StructuredText data={contactPage.body.value} />
          </Box>
        </div>
      </PaddingComponent>
    </>
  );
}
