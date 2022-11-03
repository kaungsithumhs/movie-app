import React from 'react';
import ReactPlayer from 'react-player';

const PreviewModal = ({ backdropHandler, trailerKey, backdrop }) => {
  return (
    <div
      className='relative p-4 w-screen  h-screen  backdrop-blur-xl backdrop-opacit-10 hover:cursor-pointer'
      onClick={backdropHandler}
    >
      <div className='p-6 space-y-6 relative max-w-2xl mx-auto mt-20'>
        <ReactPlayer url={`https://www.youtube.com/embed/${trailerKey}`} controls playing={!backdrop} />
      </div>
    </div>
  );
};

export default PreviewModal;
