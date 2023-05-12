import { Todo, TodoState } from 'src/app/interfaces/user.interface';
import { createReducer, on } from '@ngrx/store';

import * as TodoAcrions from './todo.actions';

const todoState: TodoState = {
  todolist: [
    {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: 'quis ut nam facilis et officia qui',
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: 'fugiat veniam minus',
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: 'et porro tempora',
      completed: true,
    },
    {
      userId: 1,
      id: 5,
      title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
      completed: false,
    },
    {
      userId: 1,
      id: 6,
      title: 'qui ullam ratione quibusdam voluptatem quia omnis',
      completed: false,
    },
    {
      userId: 1,
      id: 7,
      title: 'illo expedita consequatur quia in',
      completed: false,
    },
    {
      userId: 1,
      id: 8,
      title: 'quo adipisci enim quam ut ab',
      completed: true,
    },
  ],
  err: '',
};

export const todoReducer = createReducer(
  todoState,
  on(TodoAcrions.deleteTodo, (state, { id }) => {
    const todo = state.todolist.find((todo) => todo.id === id);
    if (todo) {
      return {
        ...state,
        todolist: state.todolist.filter((item) => item.id !== todo.id),
      };
    } else return state;
  })
  // on(),
  // on()
);

// {
//   todos: {
//     todolist: [],
//     err: ''
//   }
// }
