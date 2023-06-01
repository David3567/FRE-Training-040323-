import { Component, Input, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/core/local-storage.service';
import jwt_decode from 'jwt-decode';
import { UserService } from 'src/app/core/user.service';
import { Subscription } from 'rxjs';
import { User } from 'src/app/core/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() userHeader?: string;

  user!: User;
  userSubscription!: Subscription;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.userSubscription = this.userService
      .getUser()
      .subscribe((user: User) => {
        this.user = user;
      });
  }

  ngOnDestroy(): void {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  logout() {
    this.userService.deleteUser();
    this.router.navigate(['/']);
  }
}
