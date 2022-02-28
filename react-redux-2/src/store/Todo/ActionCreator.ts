import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import getPosts from '../../api/getPosts';
import Todo from './ActionType';

export const getTodo = createAsyncThunk(Todo.Get, () => {
  return getPosts();
})

export const like = createAction(Todo.Like);