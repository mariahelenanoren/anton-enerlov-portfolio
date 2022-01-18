import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
	landingInner: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
	},
	landingContainer: {
		height: '100vh',
		position: 'relative',
		'@media (max-width: 400px)': {
			height: '55vh',
		},
	},

	landingTitle: {
		fontSize: '64px',
		'@media (max-width: 400px)': {
			fontSize: '40px',
		},
	},
	imageContainer: {
		position: 'absolute',
		top: '-6rem',
		right: 0,
		left: 0,
		bottom: 0,
		'@media (max-width: 400px)': {
			height: '55vh',
		},
	},
	image: {
		width: '100%',
		height: '100%',
		'& img': {
			height: '100%',
			width: '100%',
			objectFit: 'cover',
		},
	},
	overlay: {
		position: 'absolute',
		backgroundColor: 'rgba(0, 0, 0, 0.35)',
		top: '-6rem',
		right: 0,
		left: 0,
		bottom: 0,
	},
	gradient: {
		position: 'absolute',
		background: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1))',
		right: 0,
		left: 0,
		bottom: 0,
		height: '10rem',
		zIndex: 5,
	},
	contentContainer: {
		marginTop: '-6rem',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative',
		height: '100%',
	},
	iconContainer: {
		marginTop: '1rem',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	link: {
		margin: '0 0.8rem',
	},
	icon: {
		height: 'auto',
		width: '1.5rem',
	},
}));
