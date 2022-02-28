import { createReducer } from '@reduxjs/toolkit';
import { IPost } from '../../api/getPosts';
import { getTodo, like } from './ActionCreator';

export interface IPostState {
  items?: IPost[];
};
export interface ILike {
  likes: number;
};
const initialState: IPostState | undefined = {
  items: undefined
};
const initialState1: ILike = {
  likes: 0
};

export const addPost = createReducer(initialState, (builder) => {
  builder.addCase(getTodo.fulfilled, (state, action) => {
    state.items = action.payload;
  });
  builder.addCase(getTodo.rejected, (state) => {
    state.items = []
  });
});

export const likePost = createReducer(initialState1, (builder) => {
  builder.addCase(like, (state) => {
    state.likes = state.likes + 1;
  })
})
