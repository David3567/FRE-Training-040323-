import { createAction, props } from '@ngrx/store';
import { Todo } from '../interfaces/user.interface';

export const initTodolist = createAction('[Todolist] Initialize Todolist');

export const deleteTodo = createAction(
  '[Todolist] Delect a Todo',
  props<{ id: number }>()
);
export const deleteTodoSuccess = createAction(
  '[Todolist] Delect a Todo Success',
  props<{ id: number }>()
);
export const deleteTodoFailed = createAction(
  '[Todolist] Delect a Todo Failed',
  props<{ err: string }>()
);

export const loadTodolist = createAction('[Todolist] Load Todolist');

export const loadTodosSuccess = createAction(
  '[Todolist] Load Todolist Success',
  props<{ todos: Todo[] }>()
);
export const loadTodosFailed = createAction(
  '[Todolist] Load Todolist Failed',
  props<{ err: string }>()
);
