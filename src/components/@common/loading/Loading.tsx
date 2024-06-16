import { useEffect, useState } from 'react';

import Lottie from 'react-lottie-player';

import loadingJson from './loading.json';

const Loading = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsPlaying(true);
  }, []);

  return <Lottie animationData={loadingJson} play={isPlaying} loop />;
};

export default Loading;
