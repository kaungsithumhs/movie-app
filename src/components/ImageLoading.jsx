import React from 'react';
import { ImageLoader } from 'render-img';
import smImg from '../bg.jpg';
const ImageLoading = ({ baseUrl, poster }) => {
  return (
    <ImageLoader
      placeHolderSrc={smImg} // low quality image to show before actual image load
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
