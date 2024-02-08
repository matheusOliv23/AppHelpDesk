import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { SolicitationService } from 'src/services/solicitation.service';
import React from 'react';

export const useCloseSolicitation = (navigation: any, id: string) => {
  const [error, setError] = useState('');
  const { data: solicitations, isPending: isLoadingData } = useQuery({
    queryKey: ['getSolicitation', id],
    queryFn: () => SolicitationService.getSolicitationById(String(id)),
  });

  const [solution, setSolution] = React.useState('');
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: (solution: string) =>
      SolicitationService.closeSolicitation(id, solution),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['solicitations'] });
      await navigation.navigate('home', { screen: 'Finalizados' });
    },
    onError: () => setError('Erro ao enviar solução'),
  });

  const onSubmit = (solution: string) => {
    if (!solution) {
      setError('Campo obrigatório');
      return;
    }
    mutate(solution);
  };

  return {
    onSubmit,
    isPending,
    error,
    isLoadingData,
    solution,
    setSolution,
    solicitations,
  };
};
