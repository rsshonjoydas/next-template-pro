import * as Yup from 'yup';

export const emailSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email.').required('The email is required.'),
});

export const passwordSchema = Yup.object().shape({
  password: Yup.string().required('The password is required.').min(8, 'The password is too short.'),
});
