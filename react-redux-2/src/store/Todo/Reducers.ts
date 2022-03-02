import { createReducer } from '@reduxjs/toolkit';
import { IPost } from '../../api/getPosts';
import { getTodo } from './ActionCreator';

export interface IPostState {
  items?: IPost[];
};

const initialState: IPostState | undefined = {
  items: undefined
};

export const addPost = createReducer(initialState, (builder) => {
  builder.addCase(getTodo.fulfilled, (state, action) => {
    state.items = action.payload;
  });
  builder.addCase(getTodo.rejected, (state) => {
    state.items = []
  });
});
