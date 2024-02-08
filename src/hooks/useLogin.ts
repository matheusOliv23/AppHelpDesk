import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { LoginSchema } from 'src/validations/yup/login-schema';
import { useAuth } from 'src/context/Auth';
import { useState } from 'react';
import { ILogin } from 'src/types/Login';

export const useLogin = () => {
  const [error, setError] = useState('');
  const { navigate } = useNavigation();
  const { signIn } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data: ILogin) => signIn(data.email, data.password),
    onSuccess: () => navigate('home'),
    onError: () => setError('As credenciais informadas estão incorretas'),
  });

  const onSubmit = (data: ILogin) => mutate(data);

  return { onSubmit, isPending, control, handleSubmit, errors, error };
};
