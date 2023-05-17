import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { RegisterEmailComponent } from './components/register-page/register-email/register-email.component';
import { RegisterUsernameComponent } from './components/register-page/register-username/register-username.component';
import { RegisterPlanComponent } from './components/register-page/register-plan/register-plan.component';
import { MovieListPageComponent } from './components/movie-list-page/movie-list-page.component';
import { MovieDetailsComponent } from './components/movie-list-page/movie-details/movie-details.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'signin', component: SignInComponent},
  {path: 'register', component: RegisterPageComponent, children: [
    {path: '', component: RegisterEmailComponent},
    {path: 'username', component: RegisterUsernameComponent},
    {path: 'plan', component: RegisterPlanComponent}
  ]},
  {path: 'movies', component: MovieListPageComponent},
  {path: 'movies/:id', component: MovieDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
