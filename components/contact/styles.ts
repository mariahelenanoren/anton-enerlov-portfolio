import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
	contactTitle: {
		marginTop: '8rem',
		marginBottom: '4rem',
	},
	contactContainer: {
		display: 'flex',
		textAlign: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 16,
		[theme.breakpoints.only('xs')]: {
			fontSize: 14,
		},
		'& a': {
			textDecoration: 'underline',
		},
	},
}));
