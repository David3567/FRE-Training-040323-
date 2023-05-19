import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:4231';
  checkEmail(email: string) {
    return this.http.post('http://localhost:4231/auth/check-email', {
      email: email,
    });
  }
  login(userCredential: { email: string; password: string }) {
    return this.http.post<any>(`${this.url}/auth/signin`, userCredential);
  }
}
