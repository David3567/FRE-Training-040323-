import { HttpClientModule } from '@angular/common/http';
import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { WishListComponent } from './components/wish-list/wish-list.component';
import { BookService } from './services/book.service';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { ShowNameComponent } from './components/show-name/show-name.component';

export const BaseUrl = new InjectionToken<string>('');

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'show', component: ShowNameComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    BookListComponent,
    WishListComponent,
    HomeComponent,
    ShowNameComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    { provide: BookService, useClass: BookService },
    {
      provide: BaseUrl,
      useValue: 'https://www.googleapis.com/books/v1/volumes?q=',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
