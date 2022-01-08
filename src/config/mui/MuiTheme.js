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
            height: 35,
            padding: '0px 25px',
            boxShadow: '0px 3px 6px #00000029',
            ':hover': {
              borderRadius: 0,
              borderWidth: 2,
            }
          },
          contained: {
            borderRadius: '19px',
            border: '1px solid #707070',
            '&.MuiButton-containedSizeLarge': {
              height: '80px',
              width: '450px',
              fontSize: '35px'
            }
          }
        }
      },
    },
    typography: {
      fontFamily: [
        'Poppins',
        'Helvetica',
        'Arial',
        'sans-serif'
      ].join(','),
      h1: {
        fontWeight: 600,
        fontSize: '70px',
      },
      h2:{
        fontWeight: 600,
        fontSize: '50px',
      },
      h4: {
        fontFamily: 'Helvetica',
        fontSize: 18,
      },
    },
  });
