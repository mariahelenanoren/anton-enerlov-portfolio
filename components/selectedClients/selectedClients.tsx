import {
  Grid,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { ISelectedClients } from './types';
import { useStyles } from './styles';
import { TextContainer } from '../textContainer';

export default function SelectedClients({
  clientTitle,
  clientCategory,
  clients,
}: ISelectedClients) {
  const classes = useStyles();
  const theme: Theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.only('xs'));

  const createSubstrings = (name: string) => {
    return name.split(' ');
  };

  return (
    <div className={classes.selectedContainer}>
      <Typography variant="h2" className={classes.title}>
        {clientTitle}
      </Typography>
      <TextContainer>
        <Grid direction={'row'} spacing={!isMobile ? 5 : 3} container>
          {clients.map((client, index) => (
            <Grid key={index} item xs={6} className={classes.clientContainer}>
              {createSubstrings(client.name).map((substring, index) => (
                <Typography key={index} variant="body1">
                  {substring}
                </Typography>
              ))}
            </Grid>
          ))}
        </Grid>
      </TextContainer>
    </div>
  );
}
