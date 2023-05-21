import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { RegformComponent } from './pages/register/regform/regform.component';
import { PlanComponent } from './pages/register/plan/plan.component';
import { AddKeyComponent } from './pages/register/add-key/add-key.component';
import { DiscoveryComponent } from './pages/discovery/discovery.component';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail.component';
import { AuthGuard } from './guards/auth.guard';
import { MovieDetailResolver } from './resolver/movie-detail.resolver';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full',
  },
  {
    path: 'movieList',
    component: DiscoveryComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'movieList/:id',
    component: MovieDetailComponent,
    resolve: { detailResolver: MovieDetailResolver },
    // canActivate: [AuthGuard],
  },
  {
    path: 'step1',
    component: RegformComponent,
  },
  {
    path: 'step2',
    component: AddKeyComponent,
  },
  {
    path: 'step3',
    component: PlanComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
