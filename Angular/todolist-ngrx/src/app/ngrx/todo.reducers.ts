import { Todo, TodoState } from 'src/app/interfaces/user.interface';
import { createReducer, on } from '@ngrx/store';

import * as TodoAcrions from './todo.actions';

const todoState: TodoState = {
  todolist: [],
  err: '',
};

export const todoReducer = createReducer(
  todoState,
  on(TodoAcrions.loadTodosSuccess, (state, { todos }) => {
    return {
      ...state,
      todolist: todos,
    };
  }),
  on(TodoAcrions.loadTodosFailed, (state, { err }) => {
    return {
      ...state,
      err,
    };
  }),
  on(TodoAcrions.deleteTodoSuccess, (state, { id }) => {
    return {
      ...state,
      todolist: state.todolist.filter((item) => item.id !== id),
    };
  }),
  on(TodoAcrions.deleteTodoFailed, (state, { err }) => {
    return {
      ...state,
      err,
    };
  })
);

// {
//   todos: {
//     todolist: [],
//     err: ''
//   }
// }
