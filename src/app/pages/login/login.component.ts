import { Component } from '@angular/core';
import { User } from '../../interface/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',

  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string;
  password: string;

  constructor() {
    this.email = '';
    this.password = '';
  }

  onSubmit() {
    const userData: User = {
      email: this.email,
    };

    const dataStream$: Observable<User> = new Observable<User>((observer) => {
      observer.next(userData);
      observer.complete();
    });

    dataStream$.subscribe((result) => {
      console.log(result.username);
      console.log(result.password);
    });
  }
}
