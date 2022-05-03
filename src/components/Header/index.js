import {
  AppBar, Typography, Toolbar, Button,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { Logo } from '../Logo';

export function Header({ buttonTitle, linkTo }) {
  return (
    <AppBar color="inherit" position="sticky" sx={{ height: 80, justifyContent: 'center' }}>
      <Toolbar>
        <Link to="/">
          <Logo />
        </Link>
        <Typography variant="h4" component="div" color="primary" sx={{ flexGrow: 1, padding: '0px 8px' }}>
          (249) 4025191 consultas todos los días las 24hs, sin cargo.
        </Typography>
        <Link to={linkTo}>
          <Button variant="outlined" color="primary">{buttonTitle}</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
