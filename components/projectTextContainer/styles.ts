import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
	projectInfoContiner: {
		marginTop: '8rem',
		height: '10rem',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		position: 'relative',
	},
}));
