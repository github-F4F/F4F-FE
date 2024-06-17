import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetUser } from './queries/useGetUser';

const useGetToken = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState('');
  const { data: userInfo } = useGetUser(token);

  const handleChangeToken = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToken(e.target.value);
  };

  const handleClickCheckFollower = () => {
    if (userInfo) {
      localStorage.setItem('token', token);
      navigate('/search');
    } else {
      alert('토큰이 없음!');
      console.error('토큰이 없음!');
    }
  };

  return {
    token,
    handleChangeToken,
    handleClickCheckFollower,
  };
};

export default useGetToken;
