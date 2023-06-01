import { HttpClient } from "@angular/common/http";
import { FormControl } from "@angular/forms";
import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

export const emailValidator:(httpClient: HttpClient) => AsyncValidatorFn = (http: HttpClient) => {
  return (control: AbstractControl): Observable<any> => {
    const email = control.value;
    return http.post<boolean>('http://localhost:4232/auth/check-email', {email}).pipe(
      map(response => (response ? {emailExists: true}: null))
    )
  }
}