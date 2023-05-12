import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Todo, TodoState } from '../interfaces/user.interface';

const selectTodos = createFeatureSelector<TodoState>('todos');

export const getTodos = createSelector(
  selectTodos,
  (todos: TodoState): Todo[] => todos.todolist
);
