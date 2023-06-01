import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Form } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
import { SigninService } from 'src/app/signin.service';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit{


  loginForm: FormGroup;
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    })
  }

  submit() {
    console.log(this.loginForm.get('email').hasError('email'))
    if(!this.loginForm.valid) {
      return;
    }
    console.log(this.loginForm.value)
    this.authService.signIn({email: this.loginForm.value.email,
    password: this.loginForm.value.password})
  }
}
