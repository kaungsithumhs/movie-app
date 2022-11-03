import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// pages
import { HomeScreen, MovieInformationScreen, ActorScreen, ProfileScreen } from './pages';
import SearchBar from './components/SearchBar';
import SearchFeed from './pages/SearchFeed';
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return (
      <div
        style={{
          height: '100vh',
          width: '100vw',
          background: 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(10,10,54,1) 43%, rgba(10,10,54,1) 51%)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1 className='font-extrabold text-9xl text-indigo-900 italic'>MOVIES</h1>
      </div>
    );
  }
  return (
    <div>
      <SearchBar />
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/movies/:id' element={<MovieInformationScreen />} />
        <Route path='/profile/:id' element={<ProfileScreen />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
      </Routes>
    </div>
  );
};

export default App;
