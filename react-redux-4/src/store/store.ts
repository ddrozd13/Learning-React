import { configureStore } from '@reduxjs/toolkit';
import getAlcoholCocktails from './getAlcoholCocktails/Reducers';
import getCocktailsDetailsReducer from './getCocktailsDetails/Reducer';

const store = configureStore({
  reducer: {
    getAlcoholCocktails: getAlcoholCocktails,
    getCocktailsDetails: getCocktailsDetailsReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
