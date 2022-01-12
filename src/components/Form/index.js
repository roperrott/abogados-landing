import {
  Box, Typography,
} from '@mui/material';
import './index.css';

export function Form() {
  return (
    <Box>
      <Typography variant="h5" sx={{ textAlign: 'center' }}>COMPLETÁ EL FORMULARIO PARA QUE TE CONTACTEMOS</Typography>
      <Typography paragraph className="subtitle" sx={{ fontSize: '42px', fontWeight: '600' }}>¡Y RESOLVAMOS JUNTOS!</Typography>
    </Box>
  );
}
