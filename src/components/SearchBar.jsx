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
      <div className='flex items-center h-full'>
          <NavLink className=' inline-block mr-10 ml-10' to='/'>
            <BiMoviePlay className=' w-12 h-16 text-amber-500 cursor-pointer' />
          </NavLink>
          <form onSubmit={handleSubmit} autoComplete='off' className=' text-gray-300 focus-within:text-gray-600'>
            <div className='flex flex-row justify-start items-center'>
              <input
                type='search'
                className=' p-2 text-base font-normal text-gray-700 rounded transition ease-in-out m-0 focus:text-gray-700 focus:border focus:bg-white focus:border-blue-600 focus:outline-none'
                placeholder='Search'
                aria-label='Search'
                aria-describedby='button-addon2'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </form>
      </div>
    </nav>
  );
};

export default SearchBar;
