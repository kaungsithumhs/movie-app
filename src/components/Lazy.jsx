import React from 'react';
import * as Lazylogo from '../assets/json/86075-loading-upload-image.json';
import Lottie from 'lottie-react';

const Lazy = ({ title }) => {
  return (
    <>
      <div className=''>
        <Lottie animationData={Lazylogo} loop={true} autoplay />
      </div>
    </>
  );
};

export default Lazy;
