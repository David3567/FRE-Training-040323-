import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register.component';
import { PasswordComponent } from './components/password/password.component';
import { SelectplanComponent } from './components/selectplan/selectplan.component';

const routes: Routes = [
  {
    path: 'selectplan',
    component: SelectplanComponent,
  },
  {
    path: 'password',
    component: PasswordComponent,
  },
  {
    path: '',
    component: RegisterComponent,
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
