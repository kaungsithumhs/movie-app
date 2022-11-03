import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { BiMoviePlay } from 'react-icons/bi';
const SearchBar = ({ onSubmit }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.length === 0) return <p></p>;
    navigate(`/search/${searchTerm}`);
    setSearchTerm('');
  };
  return (
    <nav className='h-16 text-white bg-gray-900 capitalize shadow-md  min-w-full'>
      <div className='flex justify-start'>
        <div className='relative flex items-center h-full mb-5'>
          <NavLink className='block w-[40%] ml-10' to='/'>
            <BiMoviePlay className=' w-12 h-16 text-amber-500 cursor-pointer' />
          </NavLink>
          <form onSubmit={handleSubmit} autoComplete='off' className='p-2 text-gray-300 focus-within:text-gray-600'>
            <label htmlFor='search-field' className='sr-only'>
              Search all files
            </label>
            <div className='flex flex-row justify-start items-center'>
              <input
                type='search'
                className=' relative flex-1  block w-60 ml-20 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                placeholder='Search'
                aria-label='Search'
                aria-describedby='button-addon2'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default SearchBar;
