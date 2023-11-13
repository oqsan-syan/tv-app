import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#040404', // --unnamed-color-040404
    },
    secondary: {
      main: '#3B486D', // --unnamed-color-3b486d
    },
    text: {
      primary: '#F1F1F1', // --unnamed-color-f1f1f1
      secondary: '#858688', // --unnamed-color-858688
    },
  },
  typography: {
    fontFamily: 'Tajawal, sans-serif', // --unnamed-font-family-tajawal
    h1: {
      fontFamily: 'Tajawal',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '92px', // --unnamed-font-size-92
      lineHeight: '42px', // --unnamed-line-spacing-42
      letterSpacing: '0', // --unnamed-character-spacing-0
      color: '#FFFFFF', // --unnamed-color-ffffff
      textTransform: 'uppercase', // --unnamed-text-transform-uppercase
    },
    h2: {
      fontFamily: 'Tajawal',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '36px', // --unnamed-font-size-36
      lineHeight: '43px', // --unnamed-line-spacing-43
      letterSpacing: '0', // --unnamed-character-spacing-0
      color: '#FFFFFF', // --unnamed-color-ffffff
    },
    h3: {
      fontFamily: 'Tajawal',
      fontStyle: 'normal',
      fontWeight: 'medium',
      fontSize: '32px', // --unnamed-font-size-32
      lineHeight: '38px', // --unnamed-line-spacing-38
      letterSpacing: '0', // --unnamed-character-spacing-0
      color: '#FFFFFF', // --unnamed-color-ffffff
    },
    h4: {
      fontFamily: 'Tajawal',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '32px', // --unnamed-font-size-32
      lineHeight: '30px', // --unnamed-line-spacing-30
      letterSpacing: '-0.32px', // --unnamed-character-spacing--0-32
      color: '#FFFFFF', // --unnamed-color-ffffff
    },
    h5: {
      fontFamily: 'Tajawal',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '32px', // --unnamed-font-size-32
      lineHeight: '42px', // --unnamed-line-spacing-42
      letterSpacing: '0', // --unnamed-character-spacing-0
      color: '#FFFFFF', // --unnamed-color-ffffff
    },
    h6: {
      fontFamily: 'Tajawal',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '24px', // --unnamed-font-size-24
      lineHeight: '42px', // --unnamed-line-spacing-42
      letterSpacing: '4.8px', // --unnamed-character-spacing-4-8
      color: '#858688', // --unnamed-color-858688
      textTransform: 'uppercase', // --unnamed-text-transform-uppercase
    },
    subtitle1: {
      fontFamily: 'Tajawal',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '24px', // --unnamed-font-size-24
      lineHeight: '30px', // --unnamed-line-spacing-30
      letterSpacing: '-0.24px', // --unnamed-character-spacing--0-24
      color: '#FFFFFF', // --unnamed-color-ffffff
    },
  },
});

export default theme;
