import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:4231';
  checkEmail(email: string) {
    return this.http.post(`${this.url}/auth/check-email`, {
      email: email,
    });
  }
  login(userCredential: { email: string; password: string }) {
    return this.http.post<any>(`${this.url}/auth/signin`, userCredential);
  }
  signup(userCredential: {
    email: string;
    username: string;
    password: string;
    role: string;
    tmdb_key: string;
  }) {
    return this.http.post<any>(`${this.url}/auth/signup`, userCredential);
  }

  updateUser(userCredential: {
    username: string;
    email: string;
    role: string;
  }) {
    return this.http.patch<any>(`${this.url}/auth/userupdate`, userCredential);
  }
}
