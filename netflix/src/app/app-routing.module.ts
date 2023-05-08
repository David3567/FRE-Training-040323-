import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from './components/homepage/home/home.component';
import { RegisterComponent } from './components/register/register/register.component';
import { LoginComponent } from './components/login/login/login.component';
import { Step1Component } from './components/register/step1/step1.component';
import { Step2Component } from './components/register/step2/step2.component';
import { Step3Component } from './components/register/step3/step3.component';
import { MoviesComponent } from './movies/movies/movies.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
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
  { path: 'movies', component: MoviesComponent },
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
