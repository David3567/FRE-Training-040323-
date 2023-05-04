import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  // user = { id: 'Aaron', email: '' };

  constructor() { }

  ngOnInit(): void {

  }

  onSubmit(contactForm: NgForm) {
    console.log(contactForm.controls.firstname.errors);
    // console.log(this.user.id);
  }



}
