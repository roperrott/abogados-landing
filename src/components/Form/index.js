import {
  Box, Typography, TextField, FormControl, Button, Snackbar, Alert, CircularProgress, Grid,
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

  const onSendData = async (values, resetForm) => {
    setIsLoading(true);
    try {
      await addDoc(collection(db, 'queries'), { ...values, date: Timestamp.fromDate(new Date()) });
      setShowSuccessAlert(true);
      setIsLoading(false);
      resetForm();
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
    onSubmit: (values, { resetForm }) => onSendData(values, resetForm),
  });
  return (
    <Box sx={{ position: 'relative', height: { xs: '1070px', md: '820px' } }}>
      <Box sx={{
        height: '40%',
      }}
      />
      <Box sx={{
        backgroundColor: 'background.paper', height: '60%',
      }}
      >
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
      <Box
        justify="center"
        align="center"
        id="contact-form"
        sx={{
          position: 'absolute', height: 'auto', maxWidth: 700, bgcolor: '#FFFFFF', alignItems: 'center', p: { xs: '24px 40px 28px', md: '60px 80px 28px' }, m: { xs: '0px 20px', md: '0px auto' }, borderRadius: '64px', display: 'flex', flexDirection: 'column', bottom: 40, left: 0, right: 0,
        }}
      >
        <Typography variant="h5" sx={{ textAlign: 'center' }}>COMPLETÁ EL FORMULARIO PARA QUE TE CONTACTEMOS</Typography>

        <Typography paragraph className="subtitle" sx={{ fontSize: '28px', fontWeight: '600' }}>¡Y RESOLVAMOS JUNTOS!</Typography>

        <form onSubmit={formik.handleSubmit} className="contact-form">
          <FormControl
            fullWidth
            sx={{
              alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', mb: '28px',
            }}
          >
            <Grid container spacing={{ xs: 4, md: 4 }} columns={{ xs: 12, md: 4 }}>
              <Grid item xs={12} md={2}>
                <TextField
                  required
                  label="Nombre"
                  InputLabelProps={{ shrink: false }}
                  margin="normal"
                  variant="outlined"
                  size="normal"
                  fullWidth
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={formik.touched.firstName && formik.errors.firstName}
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextField
                  required
                  label="Apellido"
                  InputLabelProps={{ shrink: false }}
                  margin="normal"
                  variant="outlined"
                  size="normal"
                  fullWidth
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextField
                  required
                  label="Teléfono"
                  InputLabelProps={{ shrink: false }}
                  margin="normal"
                  variant="outlined"
                  size="normal"
                  name="phone"
                  fullWidth
                  type="tel"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={formik.touched.phone && formik.errors.phone}
                />
              </Grid>
              <Grid item xs={12} md={2}>
                <TextField
                  fullWidth
                  required
                  label="Email"
                  type="email"
                  InputLabelProps={{ shrink: false }}
                  margin="normal"
                  variant="outlined"
                  size="normal"
                  value={formik.values.mail}
                  name="mail"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={formik.touched.mail && formik.errors.mail}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  required
                  multiline
                  label="Consulta"
                  InputLabelProps={{ shrink: false }}
                  margin="normal"
                  variant="outlined"
                  rows={6}
                  fullWidth
                  value={formik.values.content}
                  name="content"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={formik.touched.content && formik.errors.content}
                />
              </Grid>
            </Grid>
          </FormControl>
          <Box sx={{ textAlign: 'center' }}>
            <Button color="secondary" variant="contained" size="medium" type="submit" disabled={!formik.isValid}>
              {isLoading ? (
                <CircularProgress
                  color="success"
                  size={20}
                  sx={{
                    alignSelf: 'center',
                  }}
                />
              ) : 'ENVIAR'}
            </Button>

          </Box>
        </form>
      </Box>
    </Box>
  );
}
