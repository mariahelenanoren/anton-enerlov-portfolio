import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
	palette: {
		primary: {
			main: '#ffffff',
		},
		secondary: {
			main: '#1A1A1A',
		},
		text: {
			primary: '#ffffff',
			secondary: '#D9D9D9',
		},
	},

	typography: {
		fontFamily: ['Montserrat', 'Arial', 'sans-serif'].join(','),
		h1: {
			fontSize: 48,
			'@media (max-width: 900px)': {
				fontSize: 48,
			},
			'@media (max-width: 600px)': {
				fontSize: 38,
			},
			fontWeight: 700,
		},
		h2: {
			fontSize: 48,
			'@media (max-width: 900px)': {
				fontSize: 34,
			},
			'@media (max-width: 600px)': {
				fontSize: 30,
			},
			fontWeight: 700,
		},
		h3: {
			fontSize: 28,
			'@media (max-width: 900px)': {
				fontSize: 24,
			},
			'@media (max-width: 600px)': {
				fontSize: 18,
			},
		},
		h4: {
			fontSize: 20,
			'@media (max-width: 900px)': {
				fontSize: 18,
			},
			'@media (max-width: 600px)': {
				fontSize: 18,
			},
		},
		overline: {
			fontSize: 16,
			'@media (max-width: 900px)': {
				fontSize: 14,
			},
			'@media (max-width: 600px)': {
				fontSize: 12,
			},
			color: '#A8A8A8',
			textTransform: 'uppercase',
			letterSpacing: 1.5,
		},
		body1: {
			fontSize: 18,
			lineHeight: '170%',
			'@media (max-width: 600px)': {
				fontSize: 16,
			},
		},
		body2: {
			fontSize: 16,
			lineHeight: '170%',
			'@media (max-width: 600px)': {
				fontSize: 14,
			},
		},
	},
});
