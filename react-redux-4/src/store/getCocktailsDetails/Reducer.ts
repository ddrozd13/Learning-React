import { createReducer } from '@reduxjs/toolkit';
import getCocktailsDetailsAction from './ActionCreator';
import ICocktailsDetailsState from './Type';

const initialState: ICocktailsDetailsState  = {
  cocktailsDetails: undefined
}

const getCocktailsDetailsReducer = createReducer(initialState, (builder) => {
  builder.addCase(getCocktailsDetailsAction.fulfilled, (state, action) => {
    state.cocktailsDetails = action.payload;
  });
  builder.addCase(getCocktailsDetailsAction.rejected, (state) => {
    state.cocktailsDetails = []
  })
});

export default getCocktailsDetailsReducer;
