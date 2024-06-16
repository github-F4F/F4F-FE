import { useQuery } from '@tanstack/react-query';
import { getUserInfo } from '../apis/getUser';

export const useGetUser = (token: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['user'],
    queryFn: () => getUserInfo(token),
    staleTime: 50000,
    gcTime: 100000,
  });

  return { data, isLoading, error };
};
