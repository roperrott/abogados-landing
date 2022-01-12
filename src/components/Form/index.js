import { Box, FormControl, TextField, Typography } from '@mui/material';
import { InputForm } from '../InputForm';
import './index.css';

export function Form() {
    return(
        <Box>
            <Typography variant='h5' sx={{ textAlign: 'center'}}>COMPLETÁ EL FORMULARIO PARA QUE TE CONTACTEMOS</Typography>
            <Typography paragraph className='subtitle' sx={{ fontSize:'42px', fontWeight: '600'}}>¡Y RESOLVAMOS JUNTOS!</Typography>
            {/* <InputForm/>
            <FormControl>
                <TextField InputLabelProps={{ shrink: true, margin: 'dense' }} label='texto2'/>
            </FormControl> */}
        </Box>
    )
}