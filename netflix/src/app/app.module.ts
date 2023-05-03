import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './components/homepage/header/header.component';
import { HeroComponent } from './components/homepage/hero/hero.component';
import { MatInputModule } from '@angular/material/input';
import { IntroductionComponent } from './components/homepage/introduction/introduction.component';
import { HomeComponent } from './components/homepage/home/home.component';
import { RegisterComponent } from './components/register/register/register.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent, HeroComponent, IntroductionComponent, HomeComponent, RegisterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
