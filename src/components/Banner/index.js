import { Box, Typography, Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import news from '../../assets/newsIcon.png';
import './index.css';

export function Banner() {
  return (
    <Box sx={{ position: 'relative' }}>
      <Box className="banner">
        <Box className="banner-container">
          <Typography variant="h1" color="primary">
            ASESORAMIENTO ONLINE
          </Typography>
          <Typography variant="h2" color="primary">
            Conocé tus derechos
          </Typography>
          <Button color="secondary" variant="contained" size="medium">
            CONTACTANOS
          </Button>
        </Box>
        <Button
          variant="contained"
          size="large"
          color="primary"
          sx={{ zIndex: 2, position: 'absolute', bottom: -53.5 }}
          startIcon={<img src={news} className="news-icon" alt="noticias" />}
          endIcon={<ArrowForwardIosIcon fontSize="inherit" />}
        >
          NOTICIAS E INFORMACIÓN PARA EL TRABAJADOR
        </Button>
      </Box>
    </Box>

  );
}
