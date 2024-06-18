import { Client } from './client';

export interface User {
  login: string;
  id: number;
  avatar_url: string;
  url: string;
}

export const getFollowingList = async (token: string, cnt: number) => {
  const { data } = await Client(token).get<User[]>(`/user/following?per_page=${cnt}`);

  return data;
};
