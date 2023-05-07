import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { RegisterpageComponent } from './components/registerpage/registerpage.component';
import { PasswordComponent } from './components/password/password.component';
import { SelectplanComponent } from './components/selectplan/selectplan.component';
import { MovielistComponent } from './components/movielist/movielist.component';
const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'login', component: LoginpageComponent },
  { path: 'register',component: RegisterpageComponent },
  {path: 'password', component: PasswordComponent},
  {path: 'selectPlan', component: SelectplanComponent},
  {path: 'list', component: MovielistComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
