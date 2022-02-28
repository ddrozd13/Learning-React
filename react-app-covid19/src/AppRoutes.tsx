import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import FirstPage from './components/FirstPage/FirstPage';
import SecondPage from './components/SecondPage/SecondPage';

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/first" element={<FirstPage />} />
      <Route path="/first/:country" element={<SecondPage />} />
      <Route path="*" element="Not found" />
    </Routes>
  )
};

export default AppRoutes;
