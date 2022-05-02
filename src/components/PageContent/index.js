import { Box, Typography } from '@mui/material';
import './index.css';

export function PageContent() {
  return (
    <Box className="content-container">
      <Typography variant="h3" color="secondary" sx={{ pt: '60px', mb: '12px' }} align="center">DEFEDEMOS AL TRABAJADOR</Typography>
      <Typography variant="body1" color="secondary" align="center">Somos especialistas en derecho laboral, indemnización por despido, maltrato laboral, acoso laboral, trabajo en negro, enfermedades profesionales, diferencias salariales, horas extras impagas, discriminación laboral, trabajo insalubre y más.</Typography>
    </Box>
  );
}
