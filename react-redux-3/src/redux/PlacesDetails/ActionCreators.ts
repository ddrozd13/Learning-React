import { createAsyncThunk } from '@reduxjs/toolkit';
import PlacesApi from '../../api/Places';
import IPlacesDetailsActionType from './ActionType';

const placesApi = new PlacesApi();

export const getPlacesDetails = createAsyncThunk(IPlacesDetailsActionType.GetPlacesDetails, (id: string) => {
  return placesApi.getById(id);
})