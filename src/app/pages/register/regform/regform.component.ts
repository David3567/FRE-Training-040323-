import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service.service';
import { User } from 'src/app/interface/user';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-regform',
  templateUrl: './regform.component.html',
  styleUrls: ['./regform.component.scss'],
})
export class RegformComponent implements OnDestroy, OnInit {
  firstForm: FormGroup = new FormGroup({});

  constructor(
    private readonly userService: UserService,
    private router: Router,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.firstForm = this.fb.group({
      email: ['litongz73@tamu.edu', Validators.required],
      password: ['random_password', Validators.required],
    });
  }

  ngOnDestroy(): void {}
  onSubmit(): void {
    const newUser: User = {
      email: this.firstForm.value.email,
      password: this.firstForm.value.password,
    };
    console.log(newUser);
    this.userService.update(newUser);
    this.router.navigate(['./step2']);
  }
}
