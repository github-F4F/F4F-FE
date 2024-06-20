import { useMutation, useQueryClient } from '@tanstack/react-query';
import { unFollowUser } from '../../apis/unFollowUser';
import { USER_QUERY_KEY } from './key';

interface IMutationParams {
  user_token: string;
  username: string;
}

export const useUnFollowUser = () => {
  const queryClient = useQueryClient();

  const { mutate, error } = useMutation({
    mutationFn: ({ user_token, username }: IMutationParams) => unFollowUser(user_token, username),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [USER_QUERY_KEY.followingList] });
    },
  });

  return { mutate, error };
};
