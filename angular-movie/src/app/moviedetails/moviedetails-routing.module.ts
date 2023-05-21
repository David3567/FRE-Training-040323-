import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviedetailsComponent } from './moviedetails.component';
import { ResolveDetailsService } from '../shared/service/resolvers/resolve-details.service';
import { roleGuard } from '../shared/service/auth/roleguard.guard';
const routes: Routes = [{ path: ':id', component: MoviedetailsComponent, resolve:{
  detailObject: ResolveDetailsService
},canActivate: [roleGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviedetailsRoutingModule { }
