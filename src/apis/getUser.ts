import { User } from '../types/user';
import { Client } from './client';

export const getUserInfo = async (token: string) => {
  const { data } = await Client(token).get(`/user`);

  return data;
};

export const getFollowersList = async (token: string, cnt: number): Promise<User[]> => {
  const { data } = await Client(token).get<User[]>(`/user/following?per_page=${cnt}`);
  return data;
};
