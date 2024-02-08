import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { SolicitationService } from 'src/services/solicitation.service';
import useCountSolicitations from 'src/store/useCountSolicitations';

export const useListSolicitations = () => {
  const { setNumber } = useCountSolicitations();
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: solicitations,
    isPending,
    isRefetching,
    refetch,
  } = useQuery({
    queryKey: ['solicitations', currentPage],
    refetchOnWindowFocus: false,
    queryFn: () => SolicitationService.getSolicitations(String(currentPage)),
  });

  const isListEnd = currentPage === solicitations?.last_page;
  useEffect(() => {
    if (solicitations?.data.length) {
      setNumber(solicitations.total);
    }
  }, [solicitations?.total]);

  useEffect(() => {
    refetch();
  }, [currentPage]);

  return { solicitations, isPending, isRefetching, setCurrentPage, isListEnd };
};
