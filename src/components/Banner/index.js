import Box from '@mui/material/Box';
import { Typography } from '@material-ui/core';
import './index.css';


export function Banner() {
    return(
        <Box className='banner'>
            <Typography variant='h2'>
                ASESORAMIENTO ONLINE
            </Typography>
        </Box>
    )
}