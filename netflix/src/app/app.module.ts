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
import { RegisterHeaderComponent } from './components/register/header/header.component';
import { LoginComponent } from './components/login/login/login.component';
import { LoginHeaderComponent } from './components/login/login-header/login-header.component';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Step1Component } from './components/register/step1/step1.component';
import { Step2Component } from './components/register/step2/step2.component';
import { MatIconModule } from '@angular/material/icon';
import { Step3Component } from './components/register/step3/step3.component';
import { MoviesComponent } from './movies/movies/movies.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { MovieComponent } from './movies/movie/movie.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    IntroductionComponent,
    HomeComponent,
    RegisterComponent,
    RegisterHeaderComponent,
    LoginComponent,
    LoginHeaderComponent,
    LoginFormComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    MoviesComponent,
    MovieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatIconModule,
    HttpClientModule,
    MatChipsModule,
    MatGridListModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
