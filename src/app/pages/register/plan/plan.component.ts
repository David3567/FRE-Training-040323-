import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/services/user-service.service';
import { plan } from './plan.interface';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss'],
})
export class PlanComponent implements OnInit {
  currentUser: User = { email: '' };

  plans: plan[] = [
    {
      name: 'Basic',
      price: '$9.99',
      videoQuality: 'Good',
      resolution: '480p',
    },
    {
      name: 'Standard',
      price: '$15.49',
      videoQuality: 'Better',
      resolution: '1080p',
    },
    {
      name: 'Premium',
      price: '$19.99',
      videoQuality: 'Best',
      resolution: '4k + HDR',
    },
  ];

  selectedPlan: plan = this.plans[0];

  constructor(private userService: UserService, private router: Router) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.userService.user$.subscribe((user) => {
      console.log('step3 oninit', user);
      this.currentUser = { ...user, role: this.selectedPlan.name };
    });
  }

  onSelectPlan(plan: plan): void {
    this.selectedPlan = plan;
    this.currentUser.role = this.selectedPlan.name;
    this.userService.update(this.currentUser);
  }
}
