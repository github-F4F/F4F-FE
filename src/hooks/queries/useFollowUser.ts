import { useMutation, useQueryClient } from '@tanstack/react-query';
import { followUser } from '../../apis/followUser';
import { USER_QUERY_KEY } from './key';

interface IMutationParams {
  user_token: string;
  username: string;
}

export const useFollowUser = () => {
  const queryClient = useQueryClient();

  const { mutate, error } = useMutation({
    mutationFn: ({ user_token, username }: IMutationParams) => followUser(user_token, username),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [USER_QUERY_KEY.followingList] });
      queryClient.invalidateQueries({ queryKey: [USER_QUERY_KEY.userInfo] });
    },
  });

  return { mutate, error };
};
