import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { ChildModule } from './child/child.module';

const routes: Routes = [
  { path: 'home', component: HomeComponent },

  {
    path: 'lazyloadproduct',
    component: ChildModule
    // loadChildren: () =>
    //   import('./child/child.module').then((m) => m.ChildModule),
  },

  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
