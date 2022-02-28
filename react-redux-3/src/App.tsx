import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import PlaceDetails from './pages/PlaceDetails/PlaceDetails';

const App: FC = () => {
  return (
    <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='/places/:id' element={ <PlaceDetails />} />
      <Route path='*' element={ <h1>Not found</h1>} />
    </Routes>
  );
}

export default App;
