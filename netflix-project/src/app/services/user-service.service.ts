import { Injectable } from '@angular/core';
import { User } from '../interface/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject$ = new BehaviorSubject<User>({ email: '' });
  user$ = this.userSubject$.asObservable();
  constructor() {}

  update(data: User): void {
    this.userSubject$.next(data);
  }
}
