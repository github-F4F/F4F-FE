import { Client } from './client';

export const followUser = async (token: string, username: string) => {
  const data = await Client(token).put(`/user/following/${username}`);

  return data;
};
