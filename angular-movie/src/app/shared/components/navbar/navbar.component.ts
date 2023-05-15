import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from '../../service/auth/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() BackButton: boolean = false;
  isLoggedIn = false;
  constructor(private location: Location, public auth: AuthService) {
    this.isLoggedIn = this.auth.isLoggedIn;
  }
  goBack() {
    this.location.back();
  }
}
