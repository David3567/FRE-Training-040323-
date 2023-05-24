import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import jwt_decode from 'jwt-decode';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private token!: string;
  private userSubject = new BehaviorSubject<User>({
    id: '',
    username: '',
    email: '',
    tmdb_key: '',
    iat: 0,
    exp: 0,
  });

  private decodeToken(): void {
    if (this.token) {
      try {
        const user = jwt_decode(this.token) as User;
        this.userSubject.next(user);
      } catch (error) {
        console.log('Error decoding JWT token', error);
      }
    }
  }

  constructor(private localStorageService: LocalStorageService) {
    this.token = this.localStorageService.getToken();
    this.decodeToken();
  }

  getUser(): Observable<User> {
    return this.userSubject.asObservable();
  }

  setUser(user: User): void {
    this.userSubject.next(user);
  }
  deleteUser(): void {
    this.localStorageService.deleteToken();
    this.userSubject.next({
      id: '',
      username: '',
      email: '',
      tmdb_key: '',
      iat: 0,
      exp: 0,
    });
  }
}
