import { createAsyncThunk } from '@reduxjs/toolkit';
import getCocktails from '../../api/getCocktails';
import ICocktailType from './ActionType';

const getCocktailsAction = createAsyncThunk(ICocktailType.GetAlcoholCocktails, (utils: string) => {
  return getCocktails(utils);
});

export default getCocktailsAction;
