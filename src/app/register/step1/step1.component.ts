import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component {
  storeData = new FormGroup({
    userId: new FormControl('', [Validators.required, Validators.email]),
    userPw: new FormControl('', Validators.required),
  })

  onSubmit() {
    console.log(this.storeData);
  }
}
