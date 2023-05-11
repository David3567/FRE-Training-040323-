import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { debounceTime, map } from 'rxjs/operators';
import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css'],
})
export class Step1Component {
  constructor(private fb: FormBuilder, private http: HttpClient) {}

  registerForm = this.fb.group({
    email: [
      '',
      [Validators.required, Validators.email],
      this.emailAlreadyExists.bind(this),
      ,
    ],
    password: ['', Validators.required],
  });

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  emailAlreadyExists(
    control: AbstractControl
  ): Observable<ValidationErrors | null> {
    // const url = `localhost:4231/auth-c/check-email`;
    const url = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get<any>(url).pipe(
      map((res) => {
        if (res[0].email === control.value) {
          return { emailAlreadyExists: true };
        } else {
          return null;
        }
      })
    );
  }

  getEmailErrorMessage() {
    if (this.email?.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email?.hasError('email') ? 'Not a valid email' : '';
  }

  posting() {
    return this.http
      .get<any>('https://jsonplaceholder.typicode.com/users')
      .subscribe((data) => console.log(data[0].username));
  }
}
