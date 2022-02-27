import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Another from './AnotherWeather';
import App from './App';

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={ <App />} />
      <Route path="/another" element={ <Another />} />
    </Routes>
  );
};

export default AppRoutes;
