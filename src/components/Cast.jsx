import React from 'react';

const Cast = ({ castData, profileHandler, baseUrl }) => {
  return (
    <div className='mt-5 h-auto flex bg-white rounded-md shadow-md mx-auto relative'>
      {castData?.slice(0, 7)?.map((item) => (
        <div className='flex px-3 mx-3  '>
          <img
            onClick={() => profileHandler(item?.id)}
            src={`${baseUrl}${item?.profile_path}`}
            alt='no img'
            className=' h-32 object-contain p-2 mx-auto hover:cursor-pointer hover:scale-90  transition ease-out duration-75'
          />
          <p className='absolute top-32 w-32 px-1 mt-3 text-sm'>{item?.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Cast;
