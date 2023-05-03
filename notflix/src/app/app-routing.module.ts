import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'signin', component: SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
