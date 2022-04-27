import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
import { createTheme } from '@mui/material/styles';

const breakpoints = createBreakpoints({});

export const Theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
      contrastText: '#333333',
    },
    secondary: {
      main: '#333333',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#7ED320',
    },
    background: {
      paper: '#7ED320',
      default: '#EFEFEF94',
    },
  },
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          position: 'relative',
          paddingBottom: 4,
          paddingLeft: 4,
          fontWeight: 600,
          fontSize: 16,
          color: '#333333',
          transform: 'none',
          '&.Mui-focused': {
            color: '#333333',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          minHeight: 60,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          required: true,
          height: 40,
          fontSize: '16px',
          border: '1px solid #707070',
          '&.MuiOutlinedInput-root': {
            borderRadius: 40,
            padding: 16,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          padding: '4px 8px',
        },
        multiline: {
          height: 160,
        },
        notchedOutline: {
          border: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        outlined: {
          borderRadius: 0,
          borderWidth: 2,
          borderColor: '#FFFFFF',
          height: 28,
          padding: '0px 16px',
          boxShadow: '0px 3px 6px #00000029',
          ':hover': {
            borderRadius: 0,
            borderWidth: 2,
          },
          '&.MuiButton-sizeLarge ': {
            borderRadius: 8,
            height: 36,
            fontSize: 12,
            borderWidth: 1,
            fontWeight: 500,
          },
        },
        contained: {
          borderRadius: 12,
          border: '1px solid #707070',
          '&.MuiButton-containedSizeMedium': {
            height: 44,
            padding: '0px 60px',
            fontSize: 24,
          },
          '&.MuiButton-containedSizeLarge': {
            minHeight: 72,
            padding: '0px 32px',
            fontSize: 20,
            borderRadius: 8,
            boxShadow: '0px 3px 6px #00000029',
            border: 'none',
            margin: '0 20px',
            [breakpoints.down('sm')]: {
              fontSize: 16,
            },
          },
          '&.MuiButton-containedSizeSmall': {
            height: 32,
            borderRadius: 16,
            fontSize: 12,
            fontWeight: 600,
            border: 'none',
            color: '#FFFFFF',
            padding: '0px 8px',
          },
        },
      },
    },
    MuiSvgIcon: {
      root: {
        '&.MuiButton-startIcon': {
          fontSize: 16,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          width: 280,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: '0px 3px 6px #00000029',
          justifyContent: 'baselined',
          borderRadius: 64,
          paddingBottom: 16,
          marginTop: 28,
          '&.MuiNewsCard': {
            width: '90%',
            display: 'flex',
            flexDirection: 'row',
            boxShadow: 'none',
            border: 'none',
            padding: '20px 0px',
            borderRadius: 0,
            marginLeft: '40px',
            marginRight: '40px',
            borderBottom: '2px solid #00000029',
            [breakpoints.down('sm')]: {
              flexDirection: 'column',
            },
          },
        },
      },
    },
    MuiCardMedia: {
      styleOverrides: {
        root: {
          maxWidth: 352,
        },
      },
    },
  },
  typography: {
    fontFamily: [
      'Poppins',
      'Lato',
      'Helvetica',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 600,
      fontSize: 48,
      [breakpoints.down('sm')]: {
        fontSize: 40,
      },
    },
    h2: {
      fontWeight: 600,
      fontSize: 32,
    },
    h3: {
      fontWeight: 700,
      fontSize: 32,
    },
    h4: {
      fontFamily: 'Helvetica',
      fontSize: 16,
    },
    h5: {
      fontWeight: 500,
      fontSize: 20,
      color: '#333333',
    },
    h6: {
      fontFamily: 'Lato',
      fontWeight: 700,
      fontSize: 16,
      color: '#707070',
    },
    body1: {
      fontWeight: 400,
      fontSize: 24,
      '&.MuiListItemText-primary': {
        fontSize: 16,
        fontWeight: 600,
        color: '#FFFFFF',
      },
    },
    body2: {
      fontFamily: 'Lato',
      fontSize: 16,
      color: '#707070',
      textAlign: 'center',
    },
  },
});
