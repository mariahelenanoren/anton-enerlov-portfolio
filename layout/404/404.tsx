import { Button, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { PaddingComponent } from '../../components';
import { useStyles } from './styles';

export default function FourOhFour() {
  const classes = useStyles();
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <PaddingComponent>
      <div className={classes.sectionContainer}>
        <Typography variant="h1">404</Typography>
        <Typography variant="h2">Page not found</Typography>
        <Button
          onClick={handleClick}
          className={classes.button}
          variant="contained"
          color="primary"
        >
          Go back
        </Button>
      </div>
    </PaddingComponent>
  );
}
