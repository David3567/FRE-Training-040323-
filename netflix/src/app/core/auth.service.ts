import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  checkEmail(email: string) {
    return this.http.post('http://localhost:4231/auth/check-email', { email: email });
  }
}

