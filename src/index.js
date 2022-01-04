import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from './App';
import reportWebVitals from './reportWebVitals';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#7ED320',
      contrastText: '#FFFFFF',
    },
    background: {
      paper: '#7ED320',
      default: '#7ED320',
    }
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
