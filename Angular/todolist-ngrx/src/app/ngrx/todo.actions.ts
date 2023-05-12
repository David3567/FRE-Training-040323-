import { createAction, props } from '@ngrx/store';

export const initTodolist = createAction('[Todolist] Initialize Todolist');

export const deleteTodo = createAction(
  '[Todolist] Delect a Todo',
  props<{ id: number }>()
);
