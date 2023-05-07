import { Component } from '@angular/core';

const tableData = [
  {title: 'Monthly Rate', cost: '$9.99'}
]

@Component({
  selector: 'app-register-plan',
  templateUrl: './register-plan.component.html',
  styleUrls: ['./register-plan.component.scss']
})
export class RegisterPlanComponent {
  selectedColumn: null = null;
}
