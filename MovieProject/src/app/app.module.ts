import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { Register2Component } from './register/register2/register2.component';
import { MovielistComponent } from './movielist/movielist.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SigninComponent,
    RegisterComponent,
    Register2Component,
    MovielistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
