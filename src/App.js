import React, { useContext, useState, useEffect } from 'react';
import { useStateContext } from './context/context';
import { Routes, Route } from 'react-router-dom';
import BackDrop from './pages/BackDropTest';
// pages
import { HomeScreen, ActorScreen, MovieInformationScreen, ProfileScreen } from './pages';

const App = () => {
  const { initialState } = useStateContext();
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
          background: 'rgb(0,0,0)',
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
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/movies/:id' element={<MovieInformationScreen />} />
        {/*  */}
        <Route path='/actors/:id' element={<ActorScreen />} />
        <Route path='/profile/:id' element={<ProfileScreen />} />
      </Routes>
      {/* <TestDetail /> */}
    </div>
  );
};

export default App;
