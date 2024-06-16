import { useQuery } from '@tanstack/react-query';
import { getUserInfo } from '../../apis/getUser';
import { USER_QUERY_KEY } from './key';

export const useGetUser = (token: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [USER_QUERY_KEY.userInfo],
    queryFn: () => getUserInfo(token),
    staleTime: 50000,
    gcTime: 100000,
  });

  return { data, isLoading, error };
};
