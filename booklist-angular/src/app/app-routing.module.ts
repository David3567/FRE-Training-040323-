import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShowbooksComponent } from './showbooks/showbooks.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'showbooks', component: ShowbooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

exports: [RouterModule]
})
export class AppRoutingModule { }
