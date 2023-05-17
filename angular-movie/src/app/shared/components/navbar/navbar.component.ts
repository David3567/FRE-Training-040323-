import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from '../../service/auth/auth.service';
import { Decoded } from 'src/app/core/model/Decoded';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  user: Decoded | null = null;
  private userProfileSubscription: Subscription | null = null;
  constructor(private location: Location, private auth: AuthService) {
  }
  ngOnInit(){
    this.userProfileSubscription = this.auth.userProfile$.subscribe(userProfile => {
      this.user = userProfile;
    });
  }
  ngOnDestroy() {
    if (this.userProfileSubscription) {
      this.userProfileSubscription.unsubscribe();
    }
  }
  logout(){
    this.auth.logout();
  }
}
