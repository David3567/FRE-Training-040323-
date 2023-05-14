import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  storeData = new FormGroup({
    userId: new FormControl('', [Validators.required, Validators.email]),
    userPw: new FormControl('', Validators.required),
  })

  onSubmit() {
    console.log(this.storeData);
  }
}
