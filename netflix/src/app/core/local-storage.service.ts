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
  storeUserRole(userRole: string): void {
    localStorage.setItem('role', userRole);
  }
  getToken() {
    return localStorage.getItem('token') || '';
  }
  getUserRole() {
    return localStorage.getItem('role') || '';
  }
  deleteToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
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
