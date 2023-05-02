import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Observable, Subscription, fromEvent } from 'rxjs';
import { Todo } from 'src/app/interfaces/user.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit, OnDestroy {
  @ViewChild('inputbox', { static: true }) inputbox!: ElementRef;

  // group of your val
  // todolist: Todo[] = [];
  todolist$!: Observable<Todo[]>;
  sbp!: Subscription;
  inputval = '';
  counter = 0;

  // group of your lifecycle
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    // this.todolist$ = this.todoService.getTodo();

    // this.sbp = fromEvent(this.inputbox.nativeElement, 'keyup').subscribe(
    //   (_) => {
    //     console.log(this.inputval);
    //   }
    // );

    this.todoService.counterSubj$.subscribe((counter: any) => {
      this.counter = counter;
    });
    // this.counter = this.todoService.counter;
  }
  ngOnDestroy(): void {
    this.sbp.unsubscribe();
  }

  add() {
    this.todoService.add();
  }

  // group of your methods
  dt(id: number) {
    console.log('from todolist: ', id);
  }
}

// name = 'Angular';
// color = 'blue';

// private colors = ['red', 'yellow', 'blue', 'green'];
// private index = 0;

// switchColor() {
//   this.color = this.colors[this.index++];
//   if (this.index === this.colors.length) {
//     this.index = 0;
//   }
// }
// onKeyUp(inputbox: HTMLInputElement) {
//   // console.log(inputbox.value);
//   this.name = inputbox.value;
// }
