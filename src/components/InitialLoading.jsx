import React from 'react';
import * as LoadingLogo from '../assets/json/loading.json';
import Lottie from 'lottie-react';

const InitialLoading = () => {
  return (
    <div className='w-[300px] h-[400px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-60%]'>
      <Lottie animationData={LoadingLogo} loop autoplay />
      <div className='text-center text-[40px] font-bold '>Close Your Eye For One Second</div>
    </div>
  );
};

export default InitialLoading;
