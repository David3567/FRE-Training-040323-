import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../shared/service/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  RegisterForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService, private route: ActivatedRoute,
  ) {
    this.RegisterForm = this.formBuilder.group({
      username: ['', Validators.compose([
        Validators.required,
        Validators.minLength(4)])],
      email: ['', [Validators.required], [this.authService.isEmailExists()]],
    });
  }
  onFormSubmit() {
    if (this.RegisterForm.valid) {
      this.authService.setRegisterEmail(this.RegisterForm.value.email);
      this.authService.setUserName(this.RegisterForm.value.username);
      this.router.navigate(['password'], { relativeTo: this.route });
    }
  }
}
