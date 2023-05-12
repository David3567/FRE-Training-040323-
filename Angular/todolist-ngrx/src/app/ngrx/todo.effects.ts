import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as TodoActions from './todo.actions';
import { catchError, exhaustAll, exhaustMap, map, mergeMap, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../interfaces/user.interface';

@Injectable()
export class TodoEffects {
  url = 'https://jsonplaceholder.typicode.com/todos';

  loadTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.loadTodolist),
      mergeMap((_) => {
        return this.http.get<Todo[]>(this.url).pipe(
          map((todos) => {
            return TodoActions.loadTodosSuccess({ todos });
          }),
          catchError((err) => {
            return of(TodoActions.loadTodosFailed({ err }));
          })
        );
      })
    );
  });
  deleteTodo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.deleteTodo),
      exhaustMap((id) => {
        return this.http.delete<Todo>(this.url + '/' + id).pipe(
          map((_) => {
            return TodoActions.deleteTodoSuccess({ id: +id });
          }),
          catchError((err) => {
            return of(TodoActions.deleteTodoFailed({ err }));
          })
        );
      })
    );
  });

  constructor(private actions$: Actions, private http: HttpClient) {}
}
