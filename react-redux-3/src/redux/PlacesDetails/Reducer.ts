import { createReducer } from '@reduxjs/toolkit';
import { getPlacesDetails } from './ActionCreators';
import IPlacesDetailsState from './Type';

const initialState: IPlacesDetailsState = {

};

const placesDetailsReducer = createReducer(initialState, (builder) => {
  builder.addCase(getPlacesDetails.fulfilled, (state, action) => {
    state[action.meta.arg] = action.payload;
  })
});

export default placesDetailsReducer;
