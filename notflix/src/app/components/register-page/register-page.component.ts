import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from './email-validator';
import { AuthService } from 'src/app/auth.service';
import { CurrentStepService } from 'src/app/current-step.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  emailForm: FormGroup;
  usernameForm: FormGroup;
  planForm: FormGroup;
  selectedColumns: number = 0;
  signedIn: boolean;
  currentStep: number;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private authService: AuthService, private currentStepService: CurrentStepService) {
  }

  ngOnInit(): void {
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email], emailValidator(this.http)],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })

    this.usernameForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      apiKey: ['', [Validators.required, Validators.minLength(15)]]
    })

    this.signedIn = this.authService.isLoggedIn;

    this.currentStepService.getCurrentStep().subscribe(step => {
      this.currentStep = step;
    })
  }


  onEmailSubmit() {
    if(this.emailForm.valid) {
      console.log('Email Form Data: ', this.emailForm.value)
      this.currentStepService.setCurrentStep(2);
    }
  }

  onUsernameSubmit() {
    if(this.usernameForm.valid) {
      this.currentStepService.setCurrentStep(3);
    }
  }

  onPlanSubmit() {
    const userRoles = ['USER', 'SUPERUSER', 'ADMIN']
    const data = {
      email: this.emailForm.value.email,
      password: this.emailForm.value.password,
      username: this.usernameForm.value.username,
      tmdb_key: this.usernameForm.value.apiKey,
      role: userRoles[this.selectedColumns]
    }
    if (this.signedIn) {
      console.log('signed in')
      console.log(data.role, this.authService.email)
      this.authService.updateUser({role: data.role, email: this.authService.email})
      console.log('ok')
    } else {
      this.http.post<{accessToken: string; role: string}>('http://localhost:4232/auth/signup', data)
      .subscribe(
        response => {
          console.log('response')
          this.authService.signIn({email: data.email, password: data.password})
        },
        error => {
          console.error(error)
        }
      )
    }
  }

  toggleColumnSelection(columnIndex: number) {
    this.selectedColumns = columnIndex
  }

  isColumnSelected(columnIndex: number): boolean {
    return this.selectedColumns === columnIndex
  }
}
