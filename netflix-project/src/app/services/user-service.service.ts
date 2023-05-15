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
    console.log('In user-service, new user updated', data);
    this.userSubject$.next(data);
  }

  get(): User {
    return this.userSubject$.value;
  }

  get empty(): Boolean {
    const data = this.userSubject$.value;
    for (const [key, value] of Object.entries(data)) {
      if (value === undefined || value === '') {
        return true;
      }
    }
    return false;
  }

  clear(): void {
    this.update({ email: '' });
  }
}
