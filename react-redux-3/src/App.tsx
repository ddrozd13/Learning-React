import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';

const App: FC = () => {
  return (
    <Routes>
      <Route path='/' element={ <Home />} />
      <Route path='*' element={ <h1>Not found</h1>} />
    </Routes>
  );
}

export default App;
