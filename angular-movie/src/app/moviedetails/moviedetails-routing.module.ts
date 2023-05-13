import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviedetailsComponent } from './moviedetails.component';

const routes: Routes = [{ path: ':id', component: MoviedetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviedetailsRoutingModule { }
