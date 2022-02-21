import * as yup from 'yup';

export const validationSchema = yup.object({
  firstName: yup
    .string('Ingresa tú nombre')
    .required('Nombre es un campo requerido'),
  lastName: yup
    .string('Ingresa tú apellido')
    .required('Apellido es un campo requerido'),
  phone: yup
    .string('Ingresa tú telefono')
    .min(10, 'El telefono debe tener al menos 10 números')
    .matches(/^[0-9]+$/, 'Deben ser solo números')
    .required('Telefono es un campo requerido'),
  mail: yup
    .string('Enter your password')
    .email('Ingrese un email valido')
    .required('Email es un campo requerido'),
  content: yup
    .string('Ingrese su consulta')
    .max(500, 'La consulta tiene un maximo de 500 caracteres')
    .required('Consulta es un campo requerido'),
});
