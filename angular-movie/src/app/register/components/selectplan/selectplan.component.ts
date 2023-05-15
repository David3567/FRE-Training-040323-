import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth/auth.service';

@Component({
  selector: 'app-selectplan',
  templateUrl: './selectplan.component.html',
  styleUrls: ['./selectplan.component.scss']
})
export class SelectplanComponent {
  selectedPlan = '';
  constructor(private auth: AuthService, private router: Router){}
  handleSubmit() {
    if (this.selectedPlan.length === 0) {
      alert('Please select a plan');
  }
  else{
    try {
      this.auth.handleSignUp(this.selectedPlan).subscribe(res => console.log(res), err => console.log(err.error))
    } catch (error) {
      console.log("invalid user informations")
      this.router.navigate(['/login']);
    }
  }
  }
  handleSelectPlan(plan: string){
    console.log(plan)
    this.selectedPlan = plan;
  }
}
