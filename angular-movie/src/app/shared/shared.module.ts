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
import { LayoutModule } from '@angular/cdk/layout';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { ResolveDetailsService } from './service/resolvers/resolve-details.service';
import { InterceptorService } from './service/auth/interceptor.service';
import { GuardService } from './service/auth/guard.service';
import { ProfiledialogComponent } from './components/profiledialog/profiledialog.component';
import { roleGuard } from './service/auth/roleguard.guard';
import { RestorescrollService } from './service/utility/restorescroll.service';



@NgModule({
  declarations: [BackgroundComponent, NavbarComponent, DateToYearPipe, TruncatePipe, ProfiledialogComponent],
  imports: [
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    MatBadgeModule,
    MatNativeDateModule,
    MatRippleModule,
    MatBottomSheetModule,
    LayoutModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    YouTubePlayerModule
  ],
  exports: [BackgroundComponent, NavbarComponent, DateToYearPipe, TruncatePipe, MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    MatBadgeModule,
    MatNativeDateModule,
    MatRippleModule,
    MatBottomSheetModule,
    LayoutModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    YouTubePlayerModule],
  providers: [MovieDataService, ResolveDetailsService, GuardService, {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true},roleGuard, RestorescrollService]
})
export class SharedModule { }
