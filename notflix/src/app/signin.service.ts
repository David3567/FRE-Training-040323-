import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private http: HttpClient) { }

  signIn(data: {email: string, password: string}) {
    this.http.post<{accessToken: string, role: string}>('http://localhost:4232/auth/signin', data).subscribe((response) => {
      console.log(response)
    }, error => {
      console.error(error)
    })
  }
}
