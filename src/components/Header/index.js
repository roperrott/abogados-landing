import { AppBar, Typography, Toolbar } from '@material-ui/core';
import { Button } from '@mui/material';
import { Logo } from '../Logo'
import { useStyles } from './styles';
import './index.css';


export function Header() {

    const classes = useStyles();

    return (
    <AppBar color='default'>
        <Toolbar  className={classes.Toolbar}>
            <Logo/>
            <Typography>
                0800-888-6930 (24hs) 11-5115-8183 Consultas todos los días, las 24hs. Sin Cargo
            </Typography>
            <Button variant="outlined">Noticias</Button>
        </Toolbar>
    </AppBar>
    )
}