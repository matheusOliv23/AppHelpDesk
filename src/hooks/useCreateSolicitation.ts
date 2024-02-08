import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { NewSolicitationSchema } from 'src/validations/yup/solicitation-schema';
import { SolicitationService } from 'src/services/solicitation.service';

export const useCreateSolicitation = (navigation: any) => {
  const [error, setError] = useState('');
  const queryClient = useQueryClient();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(NewSolicitationSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data: ISolicitation) =>
      SolicitationService.createSolicitation(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['solicitations'] });
      await navigation.navigate('Em andamento');
    },
    onError: () => setError('Erro ao criar solicitação'),
  });

  const onSubmit = (data: ISolicitation) => mutate(data);

  return { onSubmit, isPending, control, handleSubmit, errors, error };
};
