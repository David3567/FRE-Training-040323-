import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieDataService } from './shared/service/moviedata/movie-data.service';
import { AuthService } from './shared/service/auth/auth.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [MovieDataService, AuthService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
