import { configureStore } from '@reduxjs/toolkit';
import { addPost, likePost } from './Todo/Reducers';

const store = configureStore({
  reducer: {
    addPost,
    likePost,
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
