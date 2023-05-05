import { Component, OnInit, OnDestroy } from '@angular/core';
import { BooksServerService } from '../core/books-server.service';
import { Subscription } from 'rxjs';
import { debounceTime, tap, catchError } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit, OnDestroy {
  searchBook = new FormControl();
  searchBookSub = new Subscription();

  constructor(private booksService: BooksServerService) {}

  ngOnInit(): void {
    this.searchBookSub = this.searchBook.valueChanges
      .pipe(
        tap((data) => console.log(data)),
        debounceTime(500),
        catchError(this.booksService.handleError)
      )
      .subscribe(value => {
        console.log('valueChanges' +value);
        this.booksService.searchBooksByName(value);
      });
  }

  ngOnDestroy(): void {
    this.searchBookSub.unsubscribe();
  }
}
