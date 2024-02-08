import { useQuery } from '@tanstack/react-query';
import { SolicitationService } from 'src/services/solicitation.service';

export const useListSolicitations = () => {
  const { data: solicitations, isPending } = useQuery({
    queryKey: ['solicitations'],
    queryFn: () => SolicitationService.getSolicitations(String(1)),
  });

  return { solicitations, isPending };
};
