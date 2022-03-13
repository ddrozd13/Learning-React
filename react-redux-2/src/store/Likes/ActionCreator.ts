import { createAction } from '@reduxjs/toolkit';
import Todo from '../Todo/ActionType';

export const like = createAction<number>(Todo.Like);
export const dislike = createAction<number>(Todo.Dislike);