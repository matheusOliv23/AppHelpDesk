import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { Alert } from 'react-native';
import { RegisterService } from 'src/services/register.service';
import { IRegister } from 'src/types/Register';
import { useNavigation } from '@react-navigation/native';
import { RegisterSchema } from 'src/validations/yup/register-schema';

export const useRegister = () => {
  const { navigate } = useNavigation();

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data: IRegister) => RegisterService.createAccount(data),
    onSuccess: () => navigate('login'),
    onError: (error: any) => {
      Object.keys(error.response.data.errors).forEach((key: any) => {
        setError(key, {
          type: 'manual',
          message:
            error.response.data.errors[key][0] ===
            'The email has already been taken.'
              ? 'O email já está em uso'
              : error.response.data.errors[key][0],
        });
      });
    },
  });

  const onSubmit = (data: IRegister) => mutate(data);

  return { onSubmit, isPending, control, handleSubmit, errors };
};
