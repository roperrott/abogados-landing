import {
  Box, Typography, TextField, FormControl, Button, Snackbar, Alert, CircularProgress,
} from '@mui/material';
import { useFormik } from 'formik';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../../firebase';
import { validationSchema } from './validationSchema';
import './index.css';

export function Form() {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSendData = async (values) => {
    setIsLoading(true);
    try {
      await addDoc(collection(db, 'queries'), { ...values, date: Timestamp.fromDate(new Date()) });
      setShowSuccessAlert(true);
      setIsLoading(false);
    } catch (e) {
      setShowErrorAlert(true);
      setIsLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      firstName: '', lastName: '', phone: '', mail: '', content: '',
    },
    validationSchema,
    onSubmit: (values) => onSendData(values),
  });
  return (
    <Box sx={{
      backgroundColor: 'background.paper', height: '800px', mt: '420px',
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
        <form onSubmit={formik.handleSubmit} className="contact-form">
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
              name="firstName"
              style={{ width: '520px' }}
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
            <TextField
              required
              label="Apellido"
              InputLabelProps={{ shrink: false }}
              margin="normal"
              variant="outlined"
              size="normal"
              name="lastName"
              style={{ width: '520px' }}
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
            <TextField
              required
              label="Teléfono"
              InputLabelProps={{ shrink: false }}
              margin="normal"
              variant="outlined"
              size="normal"
              name="phone"
              type="tel"
              style={{ width: '520px' }}
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={formik.touched.phone && formik.errors.phone}
            />
            <TextField
              required
              label="Email"
              type="email"
              InputLabelProps={{ shrink: false }}
              margin="normal"
              variant="outlined"
              size="normal"
              style={{ width: '520px' }}
              value={formik.values.mail}
              name="mail"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={formik.touched.mail && formik.errors.mail}
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
              value={formik.values.content}
              name="content"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              helperText={formik.touched.content && formik.errors.content}
            />
          </FormControl>
          <Box sx={{ textAlign: 'center' }}>
            <Button color="secondary" variant="contained" size="medium" type="submit">
              {isLoading ? (
                <CircularProgress
                  color="success"
                  size={30}
                  sx={{
                    alignSelf: 'center',
                  }}
                />
              ) : 'ENVIAR'}
            </Button>

          </Box>
        </form>
      </Box>
      <Snackbar
        open={showSuccessAlert}
        autoHideDuration={3000}
      >
        <Alert onClose={() => setShowSuccessAlert(false)} severity="success" sx={{ width: '100%' }}>
          La consulta se envió con éxito!
        </Alert>
      </Snackbar>
      <Snackbar
        open={showErrorAlert}
        autoHideDuration={3000}
      >
        <Alert onClose={() => setShowErrorAlert(false)} severity="error" sx={{ width: '100%' }}>
          Hubo un error
        </Alert>
      </Snackbar>
    </Box>
  );
}
