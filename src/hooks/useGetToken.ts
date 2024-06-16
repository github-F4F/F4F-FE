import { useState } from 'react';

const useGetToken = () => {
  const [token, setToken] = useState('');

  const handleChangeToken = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToken(e.target.value);
  };

  const handleClickCheckFollwer = () => {
    // router.push('/follow-list');
    sessionStorage.setItem('token', token);
  };

  return {
    token,
    handleChangeTokenInput,
  };
};

export default useGetToken;
