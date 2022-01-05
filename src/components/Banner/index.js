import Box from '@mui/material/Box';
import { Typography } from '@material-ui/core';
import './index.css';


export function Banner() {
    return(
        <Box className='banner'>
            <Typography sx={{
                width: '1266px',
                height: '145px',
                textAlign: 'left',
                font: 'Poppins',
                letterSpacing: '0px',
                color: '#FFFFFF'
                }}>
                Asesoramiento online
            </Typography>
        </Box>
    )
}