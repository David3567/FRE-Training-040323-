import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, map, of, tap } from 'rxjs';

@Injectable()
export class AuthService {
  url = `http://localhost:4231/`;

  constructor(private http: HttpClient) { }

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
}
