import { User } from '../types/user';
import { Client } from './client';

const PER_PAGE = 100;

export const getUserInfo = async (token: string) => {
  const { data } = await Client(token).get(`/user`);

  return data;
};

export const getFollowersList = async (token: string): Promise<User[]> => {
  const { data } = await Client(token).get<User[]>(`/user/followers?per_page=${PER_PAGE}`);
  return data;
};
