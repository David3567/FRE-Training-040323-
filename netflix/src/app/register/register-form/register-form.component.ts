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
        }),
        this.fb.group({
          // Define the controls for step 2
          // Example: emailFormCtrl
          emailFormCtrl: ['', Validators.email],
        }),
        this.fb.group({
          // Define the controls for step 2
          // Example: emailFormCtrl
          emailFormCtrl: ['', Validators.email],
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
