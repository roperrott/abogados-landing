import { createTheme } from '@mui/material/styles';

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
      background: {
        paper: '#7ED320',
        default: '#EFEFEF94',
      }
    },
    components: {
      MuiButton: {
        styleOverrides: {
          outlined: {
            borderRadius: 0,
            borderWidth: 2,
            borderColor: '#FFFFFF',
            height: 49,
            padding: '0px 25px',
            boxShadow: '0px 3px 6px #00000029',
            ':hover': {
              borderRadius: 0,
              borderWidth: 2,
            }
          }
        }
      }
    },
    typography: {
      fontFamily: [
        'Poppins',
        'Helvetica',
        'Arial',
        'sans-serif'
      ].join(','),
    }
  });
