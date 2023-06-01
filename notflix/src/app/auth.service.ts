import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  isLoggedIn: boolean = false;
  email: string;
  role: string;
  username: string;
  authStateChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  signIn(data: {email: string, password: string}) {
    this.http.post<{accessToken: string, role: string}>('http://localhost:4232/auth/signin', data).subscribe((response) => {
      console.log('this is the response',response)
      const accessToken = response.accessToken;
      localStorage.setItem('accessToken', accessToken)
      this.isLoggedIn = true;
      this.email = data.email;
      this.authStateChanged.emit(true)
      this.router.navigate(['/'])
      this.role = response.role;
      console.log(this.isLoggedIn)
    }, error => {
      console.error(error)
    })
  }

  signOut() {
    this.isLoggedIn = false;
    this.authStateChanged.emit(false)
  }

  updateUser(user: {email:string, role: string}) {
    console.log(user)
    return this.http.patch<any>('http://localhost:4232/auth/userupdate', user)
  }
}
