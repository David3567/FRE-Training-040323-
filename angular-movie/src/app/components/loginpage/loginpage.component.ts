import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})


export class LoginpageComponent {
  constructor(private formBuilder: FormBuilder,
    ) { }
  personForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });
  onFormSubmit() {
    console.log(this.personForm.value);
  }
  get username() {
    return this.personForm.get('username');
  }
  get password() {
    return this.personForm.get('password');
  }

}
