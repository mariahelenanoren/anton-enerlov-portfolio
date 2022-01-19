import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
	noRightClick: {},
	contextmenu: {
		height: '10rem',
		backgroundColor: 'white',
	},
}));
