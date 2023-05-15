import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  LoginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private router: Router, private auth: AuthService) {

    this.LoginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onFormSubmit() {
    if (this.LoginForm.valid) {
      this.auth.handleSignIn(this.LoginForm.value.username, this.LoginForm.value.password);

    }
  }


}

