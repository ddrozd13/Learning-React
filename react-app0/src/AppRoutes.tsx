import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import UserInfo from './components/UserInfo/UserInfo';

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/users/:id" element={<UserInfo/>} />
      <Route path="*" element='Not found' />
    </Routes>
  )
};

export default AppRoutes;
