import { createAsyncThunk } from '@reduxjs/toolkit';
import getCocktailsDetails from '../../api/getCocktailsDetails';
import ICocktailsDetailsActionType from './ActionType';

const getCocktailsDetailsAction = createAsyncThunk(ICocktailsDetailsActionType.GetCocktailsDetails, (id: number) => {
  return getCocktailsDetails(id);
});

export default getCocktailsDetailsAction;
