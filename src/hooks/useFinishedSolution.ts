import { useQuery } from '@tanstack/react-query';
import { SolicitationService } from 'src/services/solicitation.service';

export const useFinishedSolution = (id: string) => {
  const { data: solicitations, isPending: isLoadingData } = useQuery({
    queryKey: ['getSolicitation', id],
    queryFn: () => SolicitationService.getSolicitationById(String(id)),
  });

  return {
    isLoadingData,
    solicitations,
  };
};
