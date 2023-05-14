import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../app/home-page/home-page.component';
import { SigninComponent } from '../app/signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { Register2Component } from './register/register2/register2.component';
import { MovielistComponent } from './movielist/movielist.component';

const routes: Routes = [
  { path : 'homepage', component : HomePageComponent },
  { path : 'signin', component : SigninComponent },
  { path : 'register', component : RegisterComponent },
  { path : 'register2', component : Register2Component },
  { path : 'movielist', component : MovielistComponent },
  { path : '', redirectTo : '/homepage', pathMatch : 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
