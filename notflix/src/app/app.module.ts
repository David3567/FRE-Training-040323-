import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
import {MatButtonModule} from '@angular/material/button'
import {MatRadioModule} from '@angular/material/radio';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { NavbarComponent } from './components/home-page/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentComponent } from './components/home-page/content/content.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatError, MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { ContentCardComponent } from './components/home-page/content/content-card/content-card.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignInFormComponent } from './components/sign-in/sign-in-form/sign-in-form.component';
import { RegisterEmailComponent } from './components/register-page/register-email/register-email.component';
import { RegisterUsernameComponent } from './components/register-page/register-username/register-username.component';
import { RegisterPlanComponent } from './components/register-page/register-plan/register-plan.component';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MovieListPageComponent } from './components/movie-list-page/movie-list-page.component';
import { MovieItemComponent } from './components/movie-list-page/movie-item/movie-item.component';
import { TruncatePipe } from './truncate.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieDetailsComponent } from './components/movie-list-page/movie-details/movie-details.component';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { TrailerComponent } from './components/trailer/trailer.component'
import {MatDialogModule} from '@angular/material/dialog';
import { VideoModalComponent } from './video-modal/video-modal.component'




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    NavbarComponent,
    ContentComponent,
    ContentCardComponent,
    SignInComponent,
    SignInFormComponent,
    RegisterEmailComponent,
    RegisterUsernameComponent,
    RegisterPlanComponent,
    MovieListPageComponent,
    MovieItemComponent,
    TruncatePipe,
    MovieDetailsComponent,
    TrailerComponent,
    VideoModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatRadioModule,
    MatTableModule,
    HttpClientModule,
    ReactiveFormsModule,
    YouTubePlayerModule,
    MatDialogModule,
  ],
  providers: [TruncatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
