import { useInfiniteQuery } from '@tanstack/react-query';
import { USER_QUERY_KEY } from './key';
import { getFollowersList } from '../../apis/getUser';

const useFollowerInfiniteQuery = (token: string) => {
  const { data, isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: [USER_QUERY_KEY.follower_list],
    queryFn: ({ pageParam = 10 }) => getFollowersList(token, pageParam),
    initialPageParam: 10,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === 0 ? undefined : allPages.length + 10;
    },
    staleTime: 0,
  });

  return { data, isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage };
};

export default useFollowerInfiniteQuery;
