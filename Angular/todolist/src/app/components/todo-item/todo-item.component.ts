import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  @Input('item') todo!: Todo;
  @Output() emitId = new EventEmitter();

  deleteTodo() {
    // console.log(this.todo.id);
    this.emitId.emit(this.todo.id);
  }
}
