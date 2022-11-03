import React from 'react';
import * as ErrorLogo from '../assets/json/85978-error-dialog.json';
import Lottie from 'lottie-react';

const Error = ({ title }) => {
  return (
    <>
      <div className='w-[300px] h-[400px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-60%]'>
        <Lottie animationData={ErrorLogo} loop={false} autoplay />
      </div>
      <div className='text-center w-full text-[40px] font-bold mt-72 italic text-red-500 '>{title}</div>
    </>
  );
};

export default Error;
