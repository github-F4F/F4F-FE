import axios from 'axios';

export const Client = (token: string) => {
  const client = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
      Authorization: `token ${token}`,
    },
  });
  return client;
};
