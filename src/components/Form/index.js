import {
  Box, Typography, TextField, FormControl, Button,
} from '@mui/material';
import './index.css';

export function Form() {
  return (
    <Box sx={{
      backgroundColor: 'background.paper', height: '700px', mt: '420px',
    }}
    >
      <Box
        id="contact-form"
        sx={{
          bgcolor: '#FFFFFF', alignItems: 'center', p: '78px 88px 40px', m: '-346px 47.5px 0px', borderRadius: '92px', position: 'absolute', display: 'flex', flexDirection: 'column',
        }}
      >
        <Typography variant="h5" sx={{ textAlign: 'center' }}>COMPLETÁ EL FORMULARIO PARA QUE TE CONTACTEMOS</Typography>
        <Typography paragraph className="subtitle" sx={{ fontSize: '42px', fontWeight: '600' }}>¡Y RESOLVAMOS JUNTOS!</Typography>
        <FormControl
          fullWidth
          sx={{
            alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', mb: '40px',
          }}
        >
          <TextField
            required
            label="Nombre"
            InputLabelProps={{ shrink: false }}
            margin="normal"
            variant="outlined"
            size="normal"
          />
          <TextField
            required
            label="Apellido"
            InputLabelProps={{ shrink: false }}
            margin="normal"
            variant="outlined"
            size="normal"
          />
          <TextField
            required
            label="Teléfono"
            InputLabelProps={{ shrink: false }}
            margin="normal"
            variant="outlined"
            size="normal"
          />
          <TextField
            required
            label="Email"
            InputLabelProps={{ shrink: false }}
            margin="normal"
            variant="outlined"
            size="normal"
          />
          <TextField
            required
            multiline
            label="Consulta"
            InputLabelProps={{ shrink: false }}
            margin="normal"
            variant="outlined"
            rows={6}
            style={{ width: '100%' }}
          />
        </FormControl>
        <Button color="secondary" variant="contained" size="medium">
          ENVIAR
        </Button>
      </Box>
    </Box>
  );
}
