import React from 'react';
import { ImageLoader } from 'render-img';
import smImg from '../bg.jpg';
import Lazy from './Lazy';

const ImageLoading = ({ baseUrl, poster }) => {
  return (
    <ImageLoader
      loader={ <Lazy />}
      src={`${baseUrl}${poster}`}
      alt='...'
      blurOverLay='#fdf2f2'
      isUseBlur={true}
      threshold={100}
      width={200}
      height={300}
    />
  );
};

export default ImageLoading;
