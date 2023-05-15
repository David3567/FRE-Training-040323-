import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, map, of, tap } from 'rxjs';
import { User } from 'src/app/core/model/user';
import jwt_decode from 'jwt-decode';
interface Decoded {
  id: string;
  username: string;
  email: string;
  tmdb_key: string;
  iat: number;
  exp: number;
}
@Injectable()

export class AuthService {
  url = `http://localhost:4231/`;
  constructor(private http: HttpClient, private router: Router ) {
  }
  registerEmail = '';
  registerPassword = '';
  registerKey = '';
  registerUserName = '';
  isEmailExists(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const email = control.value;
      return this.http.post<boolean>(this.url + `auth/check-email`, { email: email }).pipe(
        map(res => {
          return res ? { exist: res } : null;
        })
      )
    };
  }
  setUserName(username: string){
    this.registerUserName = username;
  }
  handleSignUp(plan: string){
    if (this.registerEmail.length === 0 || this.registerPassword.length === 0 || this.registerKey.length === 0 || this.registerUserName.length === 0){
      throw 'error';
    }
    let user: User = {username: this.registerUserName, email: this.registerEmail, password: this.registerPassword, role: plan, tmdb_key: this.registerKey};

    // reset all fields to ''
    this.registerEmail = '';
    this.registerPassword = '';
    this.registerKey = '';
    this.registerUserName = '';
    return this.http.post<User>(this.url + `auth/signup`, user);
  }

  handleSignIn(email: string, password: string){
    return this.http.post<{email: string, password: string}>(this.url + `auth/signin`, {email, password}).subscribe(((res: any) =>{
      localStorage.setItem('access_token', res.accessToken);
      this.router.navigate(['/home']);
    })
    );
  }

  setRegisterEmail(email: string){
    this.registerEmail = email;
  }

  setRegisterPassword(password: string){
    this.registerPassword = password;
  }

  setRegisterKey(key: string){
    this.registerKey = key;
  }

  get isLoggedIn(): boolean{
    return localStorage.getItem('access_token')!== null;
  }

  get username(): string{
    let token = localStorage.getItem('access_token')
    if(token){
      let decoded:Decoded = jwt_decode(token)
      return decoded.username;
    }
    return '';

  }
  logout(){
    localStorage.removeItem('access_token');
    this.router.navigate(['/login']);
  }
}
