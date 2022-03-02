import { createReducer } from '@reduxjs/toolkit';
import { dislike, like } from './ActionCreator';

const initialState: number = 0;

export const likePost = createReducer(initialState, (builder) => {
  builder.addCase(like, (state, action) => state = action.payload + 1)
  builder.addCase(dislike, (state, action) => state = action.payload - 1)
})
