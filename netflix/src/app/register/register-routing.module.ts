import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
    children: [
      {
        path: '', // child route path
        component: Step1Component, // child route component that the router renders
      },
      {
        path: '2',
        component: Step2Component, // another child route component that the router renders
      },
      {
        path: '3',
        component: Step3Component, // another child route component that the router renders
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
