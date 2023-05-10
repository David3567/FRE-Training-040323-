import { Component } from '@angular/core';
import { userData } from './interface';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  input : userData[] = [];

  storeData = new FormGroup({
    userId: new FormControl('', [Validators.required, Validators.email]),
    userPw: new FormControl('', Validators.required),
  })

  onSubmit() {
    console.log(this.storeData);
  }
}
