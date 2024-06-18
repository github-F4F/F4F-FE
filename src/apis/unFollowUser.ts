import { Client } from './client';

export const unFollowUser = async (token: string, username: string) => {
  const data = await Client(token).delete(`/user/following/${username}`);

  return data;
};
