import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from '../../service/auth/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() BackButton: boolean = false;
  username = '';
  constructor(private location: Location, public auth: AuthService) {
    this.username = this.auth.username;
  }
  goBack() {
    this.location.back();
  }
}
