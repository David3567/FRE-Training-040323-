import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegformComponent } from './pages/register/regform/regform.component';
import { AddKeyComponent } from './pages/register/add-key/add-key.component';
import { PlanComponent } from './pages/register/plan/plan.component';
import { UserService } from 'src/app/services/user-service.service';
import { DiscoveryComponent } from './pages/discovery/discovery.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { DisplayBoxComponent } from './components/display-box/display-box.component';

export const movieUrl = new InjectionToken<string>('');
export const discoverPath = new InjectionToken<string>('');
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    MainComponent,
    RegformComponent,
    AddKeyComponent,
    PlanComponent,
    DiscoveryComponent,
    MovieItemComponent,
    DisplayBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: UserService, useClass: UserService },
    {
      provide: movieUrl,
      useValue: 'https://api.themoviedb.org/',
    },
    {
      provide: discoverPath,
      useValue: '3/discover/movie',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
