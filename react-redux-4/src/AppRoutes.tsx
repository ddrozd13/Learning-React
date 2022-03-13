import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import CocktailsDetails from './components/CocktailsDetails/CocktailsDetails';
import NotFound from './components/NotFound/NotFound';

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={ <App /> } />
      <Route path="/id=:id" element={ <CocktailsDetails /> } />
      <Route path="*" element={ <NotFound /> } />
    </Routes>
  )
};



export default AppRoutes;
