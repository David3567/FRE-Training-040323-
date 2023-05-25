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
import { DiscoveryComponent } from './pages/movieList/discovery/discovery.component';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { DisplayBoxComponent } from './components/display-box/display-box.component';
import { MovieDetailComponent } from './pages/movieList/movie-detail/movie-detail.component';
import { StoreModule } from '@ngrx/store';
import { VideoModalComponent } from './components/video-modal/video-modal.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AuthInterceptor } from './Interceptors/auth.interceptor';

export const movieUrl = new InjectionToken<string>('');
export const discoverPath = new InjectionToken<string>('');
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    MainComponent,
    DisplayBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
  ],
  providers: [
    { provide: UserService, useClass: UserService },
    {
      provide: movieUrl,
      useValue: 'api.themoviedb.org',
    },
    {
      provide: discoverPath,
      useValue: '/3/discover/movie',
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
