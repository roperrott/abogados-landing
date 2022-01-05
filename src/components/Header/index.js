import { AppBar, Typography, Toolbar, Button } from '@mui/material';
import { Logo } from '../Logo';

export function Header() {
    return (
        <AppBar color='inherit'>
            <Toolbar>
                <Logo/>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                    0800-888-6930 (24hs) 11-5115-8183 Consultas todos los días, las 24hs. Sin Cargo
                </Typography>
                <Button variant="outlined" color='primary'>Noticias</Button>
            </Toolbar>
        </AppBar>
    )
}