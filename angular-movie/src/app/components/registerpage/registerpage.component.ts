import { Component } from '@angular/core';
import { Validators, FormBuilder, Form, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.scss']
})
export class RegisterpageComponent {
  RegisterForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router
  ) {
    this.RegisterForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  onFormSubmit() {
    if (this.RegisterForm.valid) {
      this.router.navigate(['/password']);
    }
  }
}
