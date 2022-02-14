import {
  Box, Typography, TextField, FormControl,
} from '@mui/material';
import './index.css';

export function Form() {
  return (
    <Box sx={{ color: '#FFFFFF', alignContent: 'center' }}>
      <Typography variant="h5" sx={{ textAlign: 'center' }}>COMPLETÁ EL FORMULARIO PARA QUE TE CONTACTEMOS</Typography>
      <Typography paragraph className="subtitle" sx={{ fontSize: '42px', fontWeight: '600' }}>¡Y RESOLVAMOS JUNTOS!</Typography>
      <FormControl sx={{ marginRight: '88px', marginLeft: '88px', marginBottom: '65px' }}>
        <Box>
          <TextField
            required
            label="Nombre"
            InputLabelProps={{ shrink: false }}
            margin="normal"
            variant="outlined"
            size="normal"
            sx={{ marginRight: '32px' }}
          />
          <TextField
            required
            label="Apellido"
            InputLabelProps={{ shrink: false }}
            margin="normal"
            variant="outlined"
            size="normal"
          />
        </Box>
        <Box>
          <TextField
            required
            label="Teléfono"
            InputLabelProps={{ shrink: false }}
            margin="normal"
            variant="outlined"
            size="normal"
            sx={{ marginRight: '32px' }}
          />
          <TextField
            required
            label="Email"
            InputLabelProps={{ shrink: false }}
            margin="normal"
            variant="outlined"
            size="normal"
          />
        </Box>
        <Box>
          <TextField
            required
            multiline
            label="Consulta"
            InputLabelProps={{ shrink: false }}
            margin="normal"
            variant="outlined"
          />
        </Box>
      </FormControl>
    </Box>
  );
}
