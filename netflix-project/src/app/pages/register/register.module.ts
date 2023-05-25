import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AddKeyComponent } from './add-key/add-key.component';
import { PlanComponent } from './plan/plan.component';
import { RegformComponent } from './regform/regform.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  AddKeyComponent,
  PlanComponent,
  RegformComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', redirectTo: 'register-step1', pathMatch: 'full' },
      { path: 'register-step1', component: RegformComponent },
      { path: 'register-step2', component: AddKeyComponent },
      { path: 'register-step3', component: PlanComponent }
    ])
  ]
})
export class RegisterModule { }
