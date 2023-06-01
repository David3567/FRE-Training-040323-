import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import {map, take, debounceTime} from 'rxjs/operators';
import { emailValidator } from '../email-validator';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register-email',
  templateUrl: './register-email.component.html',
  styleUrls: ['./register-email.component.scss']
})
export class RegisterEmailComponent implements OnInit {

  myForm: FormGroup

  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient) {

  }


  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email], emailValidator(this.http)],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  get email() {
    return this.myForm.get('email')
  }

  get password() {
    return this.myForm.get('password')
  }



  onSubmit() {
    console.log('clicked')
    if(this.myForm.valid) {
      console.log(this.myForm.value)
      const currentURL = this.router.url;
      const newURL = currentURL + '/username'
      console.log(newURL)
      this.router.navigateByUrl(newURL)
    }
  }
}
