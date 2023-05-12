import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';

import { MoviesComponent } from './movies/movies/movies.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'movies', component: MoviesComponent },
]; // sets up routes constant where you define your routes

// configures NgModule import s and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
