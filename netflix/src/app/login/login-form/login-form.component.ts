import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  errorMessage: string | null = null;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  getEmailErrorMessage() {
    if (this.email?.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email?.hasError('email') ? 'Not a valid email' : '';
  }

  getPasswordErrorMessage() {
    if (this.password?.hasError('required')) {
      return 'You must enter a value';
    }
    return '';
  }

  ngOnInit() {}

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  getEmail() {
    return this.email?.value || '';
  }
  getPassword() {
    return this.password?.value || '';
  }

  login() {
    const email = this.getEmail();
    const password = this.getPassword();

    if (email && password) {
      this.authService
        .login({
          email: email,
          password: password,
        })
        .pipe(
          catchError((error) => {
            if (error.status === 401) {
              this.errorMessage = 'Incorrect login credentials';
            } else {
              this.errorMessage = 'An error occurred. Please try again later.';
            }
            return throwError(() => new Error(error));
          })
        )
        .subscribe((res) =>
          this.router.navigate(['/movies'], { state: res.user })
        );
    }
  }
}
