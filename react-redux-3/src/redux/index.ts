import { configureStore } from '@reduxjs/toolkit';
import placesReducer from './Places/Reducer';
import placesDetailsReducer from './PlacesDetails/Reducer';


export const initialState = {
  auth: ''
}

export const store = configureStore({
  reducer: {
    places: placesReducer,
    placesDetails: placesDetailsReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
