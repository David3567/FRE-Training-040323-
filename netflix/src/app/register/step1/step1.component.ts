import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { debounceTime, map } from 'rxjs/operators';
import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css'],
})
export class Step1Component {
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private authService: AuthService
  ) {}

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
    return this.authService.checkEmail(control.value).pipe(
      map((res) => {
        if (res) {
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
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let options = { headers: headers };
    return this.http
      .post<any>('localhost:4231/auth/check-email', {
        email: 'david@gmail.com',
        // options,
      })
      .subscribe((data) => console.log(data));
  }
}
