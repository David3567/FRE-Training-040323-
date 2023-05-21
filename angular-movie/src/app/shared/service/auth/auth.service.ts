import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, map, of, tap } from 'rxjs';
import { User } from 'src/app/core/model/user';
import jwt_decode from 'jwt-decode';
import { Decoded } from 'src/app/core/model/Decoded';
@Injectable({ providedIn: 'root' })

export class AuthService {
  url = `http://localhost:4231/`;
  private userProfileSubject = new BehaviorSubject<Decoded | null>(null);
  userProfile$ = this.userProfileSubject.asObservable();
  constructor(private http: HttpClient, private router: Router) {
    this.userProfileSubject.next(this.getUserFromToken());
    console.log('service init')
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
  setUserName(username: string) {
    this.registerUserName = username;
  }
  handleSignUp(plan: string) {
    if (this.registerEmail.length === 0 || this.registerPassword.length === 0 || this.registerKey.length === 0 || this.registerUserName.length === 0) {
      throw 'error';
    }
    let user: User = { username: this.registerUserName, email: this.registerEmail, password: this.registerPassword, role: plan, tmdb_key: this.registerKey };

    // reset all fields to ''
    this.registerEmail = '';
    this.registerPassword = '';
    this.registerKey = '';
    this.registerUserName = '';
    return this.http.post<User>(this.url + `auth/signup`, user);
  }

  handleSignIn(email: string, password: string) {
    return this.http.post<{ email: string, password: string }>(this.url + `auth/signin`, { email, password }).subscribe(((res: any) => {
      localStorage.setItem('access_token', res.accessToken);
      localStorage.setItem('role', res.role);
      let profile = this.getUserFromToken();
      if (profile) {
        this.updateUserProfile({ ...profile, role: res.role });
        this.router.navigate(['/home']);
      }
    })
    );
  }

  setRegisterEmail(email: string) {
    this.registerEmail = email;
  }

  setRegisterPassword(password: string) {
    this.registerPassword = password;
  }

  setRegisterKey(key: string) {
    this.registerKey = key;
  }

  getUserFromToken(): Decoded | null {
    let token = localStorage.getItem('access_token')
    if (token) {
      let decoded: Decoded = jwt_decode(token)
      let role = localStorage.getItem('role');
      if (role) {
        decoded.role = role;
      }
      return decoded;
    }
    return null;
  }

  logout() {
    localStorage.removeItem('access_token');
    this.updateUserProfile(null)
    this.router.navigate(['/login']);
  }
  updateUserProfile(userProfile: Decoded | null): void {
    console.log("update")
    if (userProfile) {
      localStorage.setItem('role', userProfile.role);
    } else {
      localStorage.removeItem('role');
    }

    this.userProfileSubject.next(userProfile);
  }
  updateRole(role: string): void {
    this.http.patch<any>(this.url + 'auth/userupdate', { role: role }).subscribe(res => {
      localStorage.setItem('access_token', res.accessToken);
      let profile = this.getUserFromToken();
      // console.log(profile);
      if (profile) {
        this.updateUserProfile({ ...profile, role: res.role });
      }
    }, err => {
      console.log(err)
    })
  }


}
