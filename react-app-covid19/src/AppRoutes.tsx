import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import FirstPage from './components/FirstPage/FirstPage';

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/first" element={<FirstPage />} />
      <Route path="/first/:country" element={<FirstPage />} />
      <Route path="*" element="Not found" />
    </Routes>
  )
};

export default AppRoutes;
