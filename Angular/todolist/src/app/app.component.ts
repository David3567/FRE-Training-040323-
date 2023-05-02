import { TodoService } from 'src/app/services/todo.service';
import { Component, OnInit } from '@angular/core';
import {
  Observable,
  Subject,
  interval,
  of,
  subscribeOn,
  throwError,
} from 'rxjs';
import {
  map,
  filter,
  take,
  debounceTime,
  tap,
  catchError,
} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // template: ` <div>hello world</div> `,
  // styles: [],
})
export class AppComponent implements OnInit {
  title = 'todolist';
  subject$ = new Subject();
  counter = 0;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    // this.subject$.subscribe((val) => {
    //   console.log('user1: ', val);
    // });
    // this.subject$.next('1');
    // this.subject$.next('2');
    // this.subject$.subscribe((val) => {
    //   console.log('user2: ', val);
    // });
    // this.subject$.next('4');
    // this.subject$.next('5');
    // this.subject$.complete();
    // const p = new Promise((res) => {
    //   res({
    //     id: 12,
    //   });
    // });
    // of(1, 2, 3, 4)
    // const myobs$ = interval(1000)
    //   .pipe(
    //     map((_) => 'hello world'),
    //     // filter((num) => num > 1),
    //     // tap((num) => console.log(num)),
    //     // map((num) => num + 1)
    //     tap(console.log),
    //     take(10),
    //     catchError(err => {
    //       console.log(err);
    //       return throwError((err: any) => new Error(err));
    //     })
    //   );
    // myobs$.subscribe(() => {}, (err) => console.log(err));
    // Promise.reject().catch()
    // const arr = [1, 2, 3, 4];
    // console.log(arr.map((num) => num + 1));
    this.todoService.counterSubj$.subscribe((counter: any) => {
      this.counter = counter;
    });
  }

  add() {
    this.todoService.add();
  }
  reduce() {
    this.todoService.reduce();
  }
}
