import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.scss']
})
export class RegisterpageComponent {
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
