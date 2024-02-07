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
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data: IRegister) => RegisterService.createAccount(data),
    onSuccess: () => navigate('login'),
    onError: (error) => Alert.alert('Erro', error.message),
  });

  const onSubmit = (data: IRegister) => mutate(data);

  return { onSubmit, isPending, control, handleSubmit, errors };
};
