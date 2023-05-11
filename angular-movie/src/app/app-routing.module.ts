import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: "list", loadChildren: () => import('./movielist/movielist.module').then(m => m.MovielistModule) },
  { path: "register", loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
  { path: "login", loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: "home", loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
