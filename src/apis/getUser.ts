import { Client } from './client';

export const getUserInfo = async (token: string) => {
  const { data } = await Client(token).get(`/user`);

  return data;
};
