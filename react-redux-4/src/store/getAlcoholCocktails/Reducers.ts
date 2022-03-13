import { createReducer } from '@reduxjs/toolkit';
import getCocktailsAction from './ActionCreator';
import ICocktailsState from './Type';

const initialState: ICocktailsState = {
  cocktails: undefined
}

const getAlcoholCocktails = createReducer(initialState, (builder) => {
  builder.addCase(getCocktailsAction.fulfilled, (state, action) => {
    state.cocktails = action.payload;
  });
  builder.addCase(getCocktailsAction.rejected, (state) => {
    state.cocktails = []
  })
});

export default getAlcoholCocktails;
