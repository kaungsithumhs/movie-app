import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import InitialLoading from './components/InitialLoading';
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
          background: 'linear-gradient(90deg, #b6b6b6ff 0%, #7a7afcff 51%)',
          width: '100vw',
          height: '100vh',
        }}
      >
        <InitialLoading />
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
