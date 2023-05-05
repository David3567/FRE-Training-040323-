import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { BooksServerService } from '../core/books-server.service';

@Component({
  selector: 'app-book-case',
  templateUrl: './book-case.component.html',
  styleUrls: ['./book-case.component.scss'],
})
export class BookCaseComponent implements OnInit, OnDestroy {
  readingWishList = [];
  subscribeBooksService = new Subscription();

  constructor(private booksService: BooksServerService) {}

  ngOnInit(): void {
    this.subscribeBooksService = this.booksService
      .getReadingList()
      .subscribe((data) => {
        console.log('data: ', data);
        this.readingWishList = data;
      });

    // timer(0, 1000).subscribe(() => {
    //   this.readingWishList = this.booksService.readingWishList;
    // });
  }

  deleteBookFromReadingList(book: any) {
    this.booksService.deleteFromReadingList(book);
  }

  ngOnDestroy(): void {
    this.subscribeBooksService.unsubscribe();
  }
}
