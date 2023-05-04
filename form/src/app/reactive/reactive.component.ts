import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
// Assignment 1
// Create a component called address-form component and use it in app component
// Add name, address, zipcode, state, country (4 options: Indian, England, Singapore, and USA), phone, email fields and add a submit button
// On submit button, send the data back to the app parent component using output() and show it in the UI
// Assignment 2
// Pass address data to address-form-componnet using input() and display it in the form
// Make all the form fields required, and disable submit button if the form is invalid

  constructor() { }

  ngOnInit(): void {
  }

}
