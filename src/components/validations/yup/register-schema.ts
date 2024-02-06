import * as yup from 'yup';

export const RegisterSchema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().required('Email é obrigatório').email('Email inválido'),
  password: yup
    .string()
    .min(8, 'Senha precisa ter pelo menos 8 caracteres')
    .required('Senha é obrigatória'),
  password_confirmation: yup
    .string()
    .required('Confirmação de senha é obrigatória')
    .oneOf([yup.ref('password')], 'Senhas precisam ser iguais'),
});
