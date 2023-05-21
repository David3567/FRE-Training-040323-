import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Observable, map } from 'rxjs';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent implements OnInit {
  constructor(private fb: FormBuilder, private authService: AuthService) {}
  registerForm!: FormGroup;
  formArray!: FormArray;
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
  logFormValue() {
    console.log(this.registerForm.value);
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
