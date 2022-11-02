import React from 'react';

const Navigation = () => {
  return (
    <nav className='h-16 text-white capitalize shadow-md  w-full'>
      <div className='flex pt-[16px] justify-start'>
        <div className='relative flex items-center    mb-4'>
          <h1 className='block w-[40%] ml-10'>Movies</h1>
          <input
            type='search'
            className=' relative flex-1  block w-60 ml-20 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
            placeholder='Search'
            aria-label='Search'
            aria-describedby='button-addon2'
          />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
