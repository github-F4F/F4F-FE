import { useInfiniteQuery } from '@tanstack/react-query';
import { getFollowingList } from '../../apis/getFollowUser';
import { USER_QUERY_KEY } from './key';

export const useGetFollowList = (token: string) => {
  const { data, isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: [USER_QUERY_KEY.followingList],
    queryFn: ({ pageParam = 10 }) => getFollowingList(token, pageParam),
    initialPageParam: 10,
    getNextPageParam: lastPage => {
      if (lastPage.length > 0) {
        return lastPage.length + 5;
      }
      return undefined;
    },
    staleTime: 0,
  });

  return { data, isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage };
};
