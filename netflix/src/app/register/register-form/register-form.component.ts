import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, catchError, map, throwError } from 'rxjs';
import { AuthService } from 'src/app/core/auth.service';
import { LocalStorageService } from 'src/app/core/local-storage.service';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private localStorageService: LocalStorageService,
    private router: Router,
    private userService: UserService
  ) {}
  registerForm!: FormGroup;
  formArray!: FormArray;
  roleError: boolean = false;
  plans: {
    name: string;
    price: number;
    features: string;
    resolution: string;
    download: string;
    role: 'USER' | 'SUPERUSER' | 'ADMIN';
  }[] = [
    {
      name: 'Basic',
      price: 9.99,
      features: 'Great',
      resolution: '1080p',
      download: 'minimize',
      role: 'USER',
    },
    {
      name: 'Standard',
      price: 13.99,
      features: 'Great',
      resolution: '1080p',
      download: 'minimize',
      role: 'SUPERUSER',
    },
    {
      name: 'Premium',
      price: 17.99,
      features: 'Best',
      resolution: '4K+HDR',
      download: 'check',
      role: 'ADMIN',
    },
  ];
  displayedColumns: string[] = [
    'name',
    'price',
    'features',
    'resolution',
    'download',
  ];

  selectedRow!: {
    name: string;
    price: number;
    features: string;
    resolution: string;
    download: string;
  };

  selectRow(row: {
    name: string;
    price: number;
    features: string;
    resolution: string;
    download: string;
    role: string;
  }): void {
    this.selectedRow = row;
    this.formArray.controls[1].get('role')?.setValue(row.role);
    this.roleError = false;
  }

  isSelected(row: {
    name: string;
    price: number;
    features: string;
    resolution: string;
    download: string;
  }): boolean {
    return this.selectedRow === row;
  }

  randomString(length: number) {
    var randomChars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for (var i = 0; i < length; i++) {
      result += randomChars.charAt(
        Math.floor(Math.random() * randomChars.length)
      );
    }
    return result;
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      formArray: this.fb.array([
        this.fb.group({
          // Define the controls for step 1
          // Example: firstNameFormCtrl, lastNameFormCtrl
          email: [
            '',
            [Validators.required, Validators.email],
            this.emailAlreadyExists.bind(this),
          ],
          password: ['', Validators.required],
          username: ['', Validators.required],
        }),
        this.fb.group({
          // Define the controls for step 2
          // Example: emailFormCtrl
          role: [''],
        }),
        // Add more form groups for additional steps if needed
      ]),
    });
    this.formArray = this.registerForm.get('formArray') as FormArray;
  }

  get email() {
    return this.formArray.at(0).get('email');
  }

  get password() {
    return this.formArray.at(0).get('password');
  }
  get username() {
    return this.formArray.at(0).get('username');
  }
  get role() {
    return this.formArray.at(1).get('role');
  }

  logFormValue() {
    if (!this.role?.value) {
      this.roleError = true;
    } else {
      console.log(this.registerForm.value);
    }
  }
  register() {
    if (!this.role?.value) {
      this.roleError = true;
    } else {
      const tmdb_key = this.randomString(20);
      const userCredential = {
        ...this.registerForm.value.formArray[0],
        ...this.registerForm.value.formArray[1],
        tmdb_key: tmdb_key,
      };
      this.authService
        .signup(userCredential)
        .pipe(
          catchError((error) => {
            return throwError(() => new Error(error));
          })
        )
        .subscribe((res) => {
          this.localStorageService.storeToken(res.accessToken);
          this.localStorageService.storeUserRole(res.role);
          const user = this.localStorageService.decodeToken(res.accessToken);
          if (user) {
            this.userService.setUser(user);
          }
          this.router.navigate(['/']);
        });
    }
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
}
