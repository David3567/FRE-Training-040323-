import { Component } from '@angular/core';
import { userData } from './interface';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  input : userData[] = [];
}
