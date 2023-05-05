import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})


export class LoginpageComponent {
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
