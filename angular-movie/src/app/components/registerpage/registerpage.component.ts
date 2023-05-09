import { Component } from '@angular/core';
import { Validators, FormBuilder, Form, FormGroup, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.scss']
})
export class RegisterpageComponent {
  RegisterForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private authService :AuthService
  ) {
    this.RegisterForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required], [this.authService.isEmailExists()]],
    });
  }
  onFormSubmit() {
    if (this.RegisterForm.valid) {
      this.router.navigate(['/password']);
    }
  }
}
