import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useGetToken = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState('');
  // const { dta: userInfo } = useGetUser(token);

  const handleChangeToken = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToken(e.target.value);
  };

  const handleClickCheckFollower = () => {
    if (token) {
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
