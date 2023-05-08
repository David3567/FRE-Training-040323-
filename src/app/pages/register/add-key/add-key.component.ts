import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-service.service';
import { User } from 'src/app/interface/user';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-add-key',
  templateUrl: './add-key.component.html',
  styleUrls: ['./add-key.component.scss'],
})
export class AddKeyComponent implements OnDestroy, OnInit {
  currentUser: User | null = null;

  constructor(
    private readonly userService: UserService,
    private router: Router,
    private readonly fb: FormBuilder
  ) {}

  secondForm: FormGroup = new FormGroup({});
  ngOnInit(): void {
    this.secondForm = this.fb.group({
      username: ['litongz', Validators.required],
      key: ['9b4d0b3f81f6c163aac86be798191447', Validators.required],
    });

    this.userService.user$.subscribe((user) => {
      this.currentUser = user;
    });
  }

  ngOnDestroy(): void {}

  onSubmit(): void {
    const newUser: User = {
      ...(this.currentUser as User),
      username: this.secondForm.value.username,
      tmdb_key: this.secondForm.value.key,
    };
    console.log('step2 onsubmit', newUser);
    this.userService.update(newUser);
    this.currentUser = newUser;
    this.router.navigate(['./step3']);
  }
}
