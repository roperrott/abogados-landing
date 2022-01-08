import { Box, Typography } from '@mui/material';
import './index.css';


export function Banner() {
    return(
        <Box className='banner'>
            <Typography variant='h1' color='primary'>
                ASESORAMIENTO ONLINE
            </Typography>
        </Box>
    )
}