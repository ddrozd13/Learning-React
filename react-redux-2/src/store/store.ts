import { configureStore } from '@reduxjs/toolkit';
import { likePost } from './Likes/Reducers';
import { addPost } from './Todo/Reducers';

const store = configureStore({
  reducer: {
    addPost,
    likePost,
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
