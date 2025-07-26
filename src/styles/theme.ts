import { createTheme } from '@mui/material';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: '#040404',
    },
    secondary: {
      main: '#3B486D',
    },
    text: {
      primary: '#F1F1F1',
      secondary: '#858688',
    },
  },
  typography: {
    fontFamily: 'Tajawal, sans-serif',
    h1: {
      fontFamily: 'Tajawal',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '92px',
      lineHeight: '42px',
      letterSpacing: '0',
      color: '#FFFFFF',
      textTransform: 'uppercase',
    },
    h2: {
      fontFamily: 'Tajawal',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '36px',
      lineHeight: '43px',
      letterSpacing: '0',
      color: '#FFFFFF',
    },
    h3: {
      fontFamily: 'Tajawal',
      fontStyle: 'normal',
      fontWeight: 'medium',
      fontSize: '32px',
      lineHeight: '38px',
      letterSpacing: '0',
      color: '#FFFFFF',
    },
    h4: {
      fontFamily: 'Tajawal',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '32px',
      lineHeight: '30px',
      letterSpacing: '-0.32px',
      color: '#FFFFFF',
    },
    h5: {
      fontFamily: 'Tajawal',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '32px',
      lineHeight: '42px',
      letterSpacing: '0',
      color: '#FFFFFF',
    },
    h6: {
      fontFamily: 'Tajawal',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '24px',
      lineHeight: '42px',
      letterSpacing: '4.8px',
      color: '#858688',
      textTransform: 'uppercase',
    },
    subtitle1: {
      fontFamily: 'Tajawal',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '24px',
      lineHeight: '30px',
      letterSpacing: '-0.24px',
      color: '#FFFFFF',
    },
  },
});

export default theme;
