import { Box, Typography } from '@mui/material';
import './index.css';

export function NotFoundContent() {
  return (
    <Box className="not-found-container">
      <Typography variant="h2" color="secondary" sx={{ pt: '86px', textAlign: 'center' }}>Oopss !!</Typography>
      <Typography variant="h3" color="secondary" sx={{ pt: '86px', mb: '17px', textAlign: 'center' }}>Pagina no encontrada</Typography>
    </Box>
  );
}
