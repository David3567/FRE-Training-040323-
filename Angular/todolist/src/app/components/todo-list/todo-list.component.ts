import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/interfaces/user.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  // group of your val
  // todolist: Todo[] = [];
  todolist$!: Observable<Todo[]>;

  // group of your lifecycle
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todolist$ = this.todoService.getTodo();
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
