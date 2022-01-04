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
      fontSize: 64,
      '@media (max-width: 900px)': {
        fontSize: 48,
      },
      '@media (max-width: 600px)': {
        fontSize: 24,
      },
    },
    h2: {
      fontSize: 48,
      '@media (max-width: 900px)': {
        fontSize: 32,
      },
      '@media (max-width: 600px)': {
        fontSize: 24,
      },
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
        fontSize: 14,
      },
    },
    overline: {
      fontSize: 14,
      '@media (max-width: 900px)': {
        fontSize: 12,
      },
      '@media (max-width: 600px)': {
        fontSize: 10,
      },
      color: '#D9D9D9',
      textTransform: 'uppercase',
    },
    body1: {
      fontSize: 16,
      '@media (max-width: 600px)': {
        fontSize: 14,
        lineHeight: '150%',
      },
    },
    body2: {
      fontSize: 14,
      '@media (max-width: 600px)': {
        fontSize: 12,
        lineHeight: '150%',
      },
    },
  },
});
