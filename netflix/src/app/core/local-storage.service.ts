import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { User } from './user.interface';
@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  storeToken(token: string): void {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token') || '';
  }
  deleteToken() {
    localStorage.removeItem('token');
  }
  decodeToken(token: string) {
    try {
      const decodedUser: unknown = jwt_decode(token);
      const user = decodedUser as User;
      return user;
    } catch (error) {
      console.error('Error decoding JWT token:', error);
      return null;
    }
  }
}
