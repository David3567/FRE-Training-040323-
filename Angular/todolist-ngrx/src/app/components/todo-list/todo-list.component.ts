import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subscription, fromEvent } from 'rxjs';
import { Todo } from 'src/app/interfaces/user.interface';
import { TodoService } from 'src/app/services/todo.service';

import * as TodoSelectors from '../../ngrx/todo.selectors';
import * as TodoActions from '../../ngrx/todo.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit, OnDestroy {
  todolist$!: Observable<Todo[]>;
  // inputbox = new FormControl();
  sbp!: Subscription;
  form!: FormGroup;

  todolist: Todo[] = [];

  get inputbox(): FormControl {
    return this.form.get('inputbox') as FormControl;
  }

  // group of your lifecycle
  constructor(
    // private readonly todoService: TodoService,
    private store: Store,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      inputbox: [],
    });

    this.store.select(TodoSelectors.getTodos).subscribe((todos) => {
      this.todolist = todos;
    });

    // this.todoService.todolist$.subscribe((todos) => {
    //   this.todolist = todos;
    // });

    // this.todoService.getTodo().subscribe();

    // this.todolist$ = this.todoService.getTodo();
    // this.sbp = this.inputbox.valueChanges.subscribe((val) => {
    //   console.log(val);
    // });
  }
  ngOnDestroy(): void {
    this.sbp.unsubscribe();
  }

  deleteTodo(id: number) {
    this.store.dispatch(TodoActions.deleteTodo({ id }));
  }
}
