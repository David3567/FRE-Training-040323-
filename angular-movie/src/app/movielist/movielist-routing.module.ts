import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovielistComponent } from './movielist.component';
import { GuardService } from '../shared/service/auth/guard.service';

const routes: Routes = [{ path: '', component: MovielistComponent, canActivate: [GuardService] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovielistRoutingModule { }
