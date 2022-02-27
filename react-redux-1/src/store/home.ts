import { createAction, createAsyncThunk, createReducer } from '@reduxjs/toolkit';

export const getCurrentDate = createAsyncThunk('getCurrentDate', () => {
  return new Promise<Date>((resolve) => {
    setTimeout(() => resolve(new Date()), 1000)
  });
});

export const deleteCurrentDate = createAction('deleteCurrentDate');

interface IHomeState {
  currentDate: Date | null;
};

const initialState: IHomeState = {
  currentDate: null
};

const homeReducer = createReducer(initialState, (builder) => {
  builder.addCase(getCurrentDate.fulfilled, (state, action) => {
    state.currentDate = action.payload;
  });

  builder.addCase(deleteCurrentDate, (state) => {
    state.currentDate = null;
  })
});

export default homeReducer;
