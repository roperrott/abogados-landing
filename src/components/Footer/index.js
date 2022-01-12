import { Box, Button, Typography } from '@mui/material';
import WhatsappTwoToneIcon from '@mui/icons-material/WhatsappTwoTone';
import logo from '../../assets/logo.svg'
import './index.css';


export function Footer(){
    return(
        <Box className='footer-container' >
            <Box sx={{ width:301 }}>
                <Typography paragraph sx={{ fontSize: 21.7, fontWeight: 600, color: '#FFFFFF', textAlign:'left', mb: 0}}>SOMOS ESPECIALISTAS EN</Typography>
                <Typography paragraph sx={{ fontSize: 21.7, fontWeight: 600, color: '#FFFFFF', textAlign:'left', mb: 0 }}>Derecho laboral</Typography>
                <Typography paragraph sx={{ fontSize: 21.7, fontWeight: 600, color: '#FFFFFF', textAlign:'left', mb: 0 }}>Indemnización por despido</Typography>
                <Typography paragraph sx={{ fontSize: 21.7, fontWeight: 600, color: '#FFFFFF', textAlign:'left', mb: 0 }}>Maltrato laboral</Typography>
                <Typography paragraph sx={{ fontSize: 21.7, fontWeight: 600, color: '#FFFFFF', textAlign:'left', mb: 0 }}>Diferencias salariales</Typography>
                <Typography paragraph sx={{ fontSize: 21.7, fontWeight: 600, color: '#FFFFFF', textAlign:'left', mb: 0 }}>Trabajo insalubre</Typography>
            </Box>
            <Box sx={{ width:490 }}>
                <Typography paragraph sx={{ fontSize: 19, fontWeight: 500, color: '#FFFFFF', textAlign:'left', mb: 0 }}>Centro de la Provincia de Buenos Aires</Typography>
                <Typography paragraph sx={{ fontSize: 19, fontWeight: 500, color: '#FFFFFF', textAlign:'left', mb: 3 }}>( Tandil, Azul Olavarría, Mar del Plata, Necochea, Dolores, Balcarce y ciudades aledañas).</Typography>
                <Button variant='outlined' size='large' endIcon={<WhatsappTwoToneIcon style={{ fontSize: 25 }}/>}>CONTACTANOS</Button>
            </Box>
            <Box>
                <img src={logo} className='footer-img' alt='Logo abogados Web'></img>
            </Box>
        </Box>
    )
}