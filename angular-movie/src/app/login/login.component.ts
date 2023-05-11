import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  LoginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private router: Router) {

    this.LoginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onFormSubmit() {
    if (this.LoginForm.valid) {
      this.router.navigate(['/home']);
    }
  }


}

