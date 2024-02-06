import * as yup from 'yup';

export const SignupSchema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().required('Email é obrigatório').email('Email inválido'),
  password: yup.string().required('Senha é obrigatória'),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref('password')], 'Senhas precisam ser iguais'),
});
