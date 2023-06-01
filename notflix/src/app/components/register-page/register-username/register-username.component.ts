import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-username',
  templateUrl: './register-username.component.html',
  styleUrls: ['./register-username.component.scss']
})
export class RegisterUsernameComponent implements OnInit {

  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router ) {

  }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(6)]],
      apiKey: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit() {
    console.log('clicked')
    if(this.myForm.valid) {
      const currentURL = this.router.url;
      const segments = currentURL.split('/');
      segments.pop();
      const urlWithoutSegment = segments.join('/');
      const newURL = urlWithoutSegment + '/plan'
      this.router.navigateByUrl(newURL)
    }
  }

}
