import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HeroComponent } from './hero/hero.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { HomeComponent } from './home/home.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { HomeRoutingModule } from './home-routing.module';
@NgModule({
  declarations: [IntroductionComponent, HeroComponent, HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    HomeRoutingModule,
  ],
})
export class HomeModule {}
