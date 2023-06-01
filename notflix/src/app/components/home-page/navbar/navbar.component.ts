import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { CurrentStepService } from 'src/app/current-step.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: boolean;
  username: string;

  constructor(private authService: AuthService, private currentStepService: CurrentStepService) {
    this.isLoggedIn = this.authService.isLoggedIn
  }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn;
    this.authService.authStateChanged.subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn;
    })

    this.username = this.authService.email;
  }

  signOut() {
    this.currentStepService.setCurrentStep(1)
    this.authService.signOut();
  }

}
