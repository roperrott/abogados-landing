import { Box, Typography, Button } from '@mui/material';
import './index.css';


export function Banner() {
    return(
        <Box sx={{ position: 'relative' }}>
            <Box className='banner'>
                <Box className='banner-container'>
                    <Typography variant='h1' color='primary' >
                        ASESORAMIENTO ONLINE
                    </Typography>  
                    <Typography variant='h2' color='primary'>
                        Conocé tus derechos
                    </Typography> 
                    <Button color='secondary' variant='contained' size='large'>
                        CONTACTANOS
                    </Button>    
                </Box>
                
            </Box>
        </Box>
        
    )
}