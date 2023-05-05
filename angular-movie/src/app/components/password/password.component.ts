import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent {
  PassForm : FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router){
    this.PassForm = this.formBuilder.group({
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(100)
    ])],
      confirmpassword: ['', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(100),
    ])]
    },{ validator: this.passwordMatchValidator })
  }

  onFormSubmit() {
    if (this.PassForm.valid) {
      this.router.navigate(['/selectPlan']);
    }
  }


  passwordMatchValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmpassword = control.get('confirmpassword');
    if (password && confirmpassword && password.value !== confirmpassword.value) {
      return { 'passwordMismatch': true };
    }
    return null;
  }
}
