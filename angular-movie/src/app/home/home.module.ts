import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroComponent } from './components/hero/hero.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent
  ],
  imports: [
    HomeRoutingModule,
    SharedModule,
  ]
})
export class HomeModule { }
