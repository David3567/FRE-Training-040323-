import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundComponent } from './components/background/background.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DateToYearPipe } from './pipes/date_to_year/date-to-year.pipe';
import { TruncatePipe } from './pipes/truncate/truncate.pipe';
import { MovieDataService } from './service/moviedata/movie-data.service';
import { AuthService } from './service/auth/auth.service';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [BackgroundComponent,NavbarComponent,DateToYearPipe,TruncatePipe],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [BackgroundComponent,NavbarComponent,DateToYearPipe,TruncatePipe],
  providers: [MovieDataService, AuthService]
})
export class SharedModule { }
